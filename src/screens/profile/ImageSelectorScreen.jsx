import { Image, View, StyleSheet } from "react-native";
import { Button } from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/user/userSlice";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../../services/profileService";
import { Title } from "../../components/ui/Title";
import useImagePicker from "../../hooks/useImagePicker";
import { useContext } from "react";
import { ErrorContext } from "../../context/ErrorContext";

export const ImageSelectorScreen = ({ navigation }) => {
    const defaultImageRoute = "../../../assets/images/defaultProfile.png";

    const { showError } = useContext(ErrorContext);
    const { base64Image, isImageFromCamera, pickImageFromPhoneCamera, pickImageFromImageGallery, saveImageInPhoneGallery } = useImagePicker();

    const { localId } = useSelector((state) => state.auth.value);
    const dispatch = useDispatch();

    const { data: base64ImageFromDB } = useGetProfileImageQuery(localId);
    const [triggerPostImage, _] = usePostProfileImageMutation();

    const confirmToSaveImage = async () => {
        try {
            dispatch(setCameraImage(base64Image));
            triggerPostImage({ base64Image, localId });
            if (isImageFromCamera) {
                saveImageInPhoneGallery();
            }
            navigation.goBack();
        } catch (error) {
            showError("Error al guardar la foto. Por favor, inténtalo de nuevo.")
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
