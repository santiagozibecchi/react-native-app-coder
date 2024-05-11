import { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button } from "../../components/ui/Button";
import * as ImagePicker from "expo-image-picker";
import * as ExpoLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/user/userSlice";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../../services/profileService";

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

    const confirmToSaveImage = async () => {
        try {
            // seteamos la imagen en el estado global de redux para poder usarla a lo largo de toda la app
            dispatch(setCameraImage(base64Image))
            // la subimos a RTF
            triggerPostImage({ base64Image, localId })
            if (isImageFromCamera) {
                const result = await ExpoLibrary.createAssetAsync(imageURI)
            }
            navigation.goBack()
        } catch (error) {
            // TODO: modal para mostrar errores al usuario
            console.log(error);
        }
    };


    return (
        <View style={styles.container}>
            {( base64Image || base64ImageFromDB ) ? (
                <>
                    <Image source={{ uri: base64Image || base64ImageFromDB?.image }} style={styles.profileImage} />
                    <Button text="Sacar otra foto" onPress={pickImageFromPhoneCamera} />
                    <Button text="Guardar Foto" onPress={confirmToSaveImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Image
                            source={require(defaultImageRoute)}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    </View>
                    <Button text="Sacar una foto" onPress={pickImageFromPhoneCamera} />
                </>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
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
});
