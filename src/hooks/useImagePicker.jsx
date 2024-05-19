import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as ExpoLibrary from "expo-media-library";

const useImagePicker = () => {
    const [base64Image, setBase64Image] = useState(null);
    const [isImageFromCamera, setIsImageFromCamera] = useState(false);
    const [imageURI, setImageURI] = useState("");

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
    };

    const pickImageFromPhoneCamera = async () => {
        setIsImageFromCamera(true);
        try {
            const permissionCamera = await verifyCameraPermissions();
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2
                });
                if (!result.canceled) {
                    // Generamos una base64Image porque el componente nativo <Image /> puede leer facilmente base64 (Lo utilizamos de este modo por simplicidad)
                    // otra alternativa sería proveer las imagenes por medio de un CDN.
                    setImageURI(result.assets[0].uri);
                    const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
                    setBase64Image(base64Image);
                }
            }
        } catch (error) {
            // TODO: componente de error: console.log(error);
        }
    };

    const verifyGalleryPermissions = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        return granted;
    };

    const pickImageFromImageGallery = async () => {
        try {
            setIsImageFromCamera(false);
            const permissionGallery = await verifyGalleryPermissions();
            if (permissionGallery) {
                const result = await ImagePicker.launchImageLibraryAsync({
                    base64: true,
                    allowsEditing: true,
                    aspect: [1, 1],
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.2,
                });
                if (!result.canceled) {
                    const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
                    setBase64Image(base64Image);
                }
            }
        } catch (error) {
            // TODO: componente de error: console.log(error);
        }
    };

    const saveImageInPhoneGallery = async () => {
        await ExpoLibrary.createAssetAsync(imageURI);
    };

    return {
        base64Image,
        isImageFromCamera,

        // Methods
        pickImageFromImageGallery,
        pickImageFromPhoneCamera,
        saveImageInPhoneGallery
    };
};

export default useImagePicker;
