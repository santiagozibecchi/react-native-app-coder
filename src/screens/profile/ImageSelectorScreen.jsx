import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button } from "../../components/ui/Button";
import * as ImagePicker from "expo-image-picker";
import * as ExpoLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/user/userSlice";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../../services/profileService";
import { Title } from "../../components/ui/Title";

export const ImageSelectorScreen = ({ navigation }) => {
    const defaultImageRoute = "../../../assets/images/defaultProfile.png";

    const [base64Image, setbase64Image] = useState(null);
    const [isImageFromCamera, setIsImageFromCamera] = useState(false);
    const [imageURI, setImageURI] = useState("");

    const { localId } = useSelector((state) => state.auth.value);
    const dispatch = useDispatch();

    const { data: base64ImageFromDB } = useGetProfileImageQuery(localId);
    const [triggerPostImage, _] = usePostProfileImageMutation();

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        return granted;
    }

    const pickImageFromPhoneCamera = async () => {
        setIsImageFromCamera(true)
        try {
            const permissionCamera = await verifyCameraPermissions()
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2
                })
                if (!result.canceled) {
                    setImageURI(result.assets[0].uri)
                    // Generamos una base64Image porque el componente nativo <Image /> puede leer facilmente base64 (Lo utilizamos de este modo por simplicidad)
                    // otra alternativa sería proveer las imagenes por medio de un CDN.
                    const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setbase64Image(base64Image)
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const verifyGalleryPermissions = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        return granted;
    }

    const pickImageFromImageGallery = async () => {
        try {
            setIsImageFromCamera(false);
            const permissionGallery = await verifyGalleryPermissions()
            if (permissionGallery) {
                const result = await ImagePicker.launchImageLibraryAsync({
                    base64: true,
                    allowsEditing: true,
                    aspect: [1, 1],
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.2,
                });
                if (!result.canceled) {
                    const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setbase64Image(base64Image)
                }
            }
        } catch (error) {
            // TODO: modal para mostrar errores al usuario
            console.log(error)
        }
    }

    const saveImageInPhoneGallery = async () => {
        await ExpoLibrary.createAssetAsync(imageURI);
    }

    const confirmToSaveImage = async () => {
        try {
            // seteamos la imagen en el estado global de redux para poder usarla a lo largo de toda la app
            dispatch(setCameraImage(base64Image));
            // la subimos a RTF
            triggerPostImage({ base64Image, localId });
            if (isImageFromCamera) {
                saveImageInPhoneGallery();
            }
            navigation.goBack();
        } catch (error) {
            // TODO: modal para mostrar errores al usuario
            console.log(error);
        }
    };

    return (
        <>
            {(base64Image || base64ImageFromDB) ? (
                <View style={styles.container}>
                    <Title text="Elige una foto de perfil" center customStyles={{ fontSize: 26 }} />
                    <Image source={{ uri: base64Image || base64ImageFromDB?.image }} style={styles.profileImage} />
                    <View style={styles.btnContainer}>
                        <Button text="Sacar otra foto" onPress={pickImageFromPhoneCamera} />
                        <Button text="Seleccionar una foto de la galería" onPress={pickImageFromImageGallery} />
                        <Button text="Guardar Foto" onPress={confirmToSaveImage} />
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    <Title text="Elige una foto de perfil" center customStyles={{ fontSize: 26 }} />
                    <View style={styles.noPhotoContainer}>
                        <Image
                            source={require(defaultImageRoute)}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button text="Sacar una foto" onPress={pickImageFromPhoneCamera} />
                    </View>
                </View>
            )}
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        gap: 20
    },
    profileImage: {
        width: 270,
        height: 270,
        borderRadius: 150
    },
    noPhotoContainer: {
        width: 300,
        height: 300,
        borderWidth: 0.8,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnContainer: {
        gap: 10
    }
});
