import { View, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../../services/profileService'
import { useNavigation } from '@react-navigation/native'
import { PROFILE_COMPONENT } from './place_component'
import { Button } from '../../components/ui/Button'
import { truncateSessionsTable } from '../../persistence'
import { clearUser } from '../../features/user/userSlice'
import { ErrorContext } from '../../context/ErrorContext'
import { setTheme } from '../../features/theme/themeSlice'

export const UserProfileScreen = () => {
  const defaultImageRoute = "../../../assets/images/defaultProfile.png";

  const { showError } = useContext(ErrorContext);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: profileImageFromDB } = useGetProfileImageQuery(localId);

  const onLaunchCamera = () => {
    navigation.navigate(PROFILE_COMPONENT.image_selector)
  }

  const onSignOut = async () => {
    try {
      const response = await truncateSessionsTable()
      dispatch(clearUser());
    } catch (error) {
      showError("Error al cerrar la sesión.")
    }
  }

  const onHandleSetTheme = (theme) => {
    dispatch(setTheme(theme))
  }

  const onHandleNavigateToFavCategories = () => {
    navigation.navigate(PROFILE_COMPONENT.favouriteCategories)
  }

  return (
    <PrincipalLayout>

      <Title text='Perfil' center customStyles={{ fontSize: 24 }} />

      <View style={styles.perfilContainer}>

        <View style={styles.imageContainer}>
          {profileImageFromDB || imageCamera ? (
            <Image
              source={{ uri: profileImageFromDB?.image || imageCamera }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={require(defaultImageRoute)}
              style={styles.profileImage}
              resizeMode="cover"
            />
          )}
        </View>

        <View style={styles.configContainer}>
          <Button
            text={
              (profileImageFromDB || imageCamera)
                ? "Modificar la imagen de perfil"
                : "Agregar imagen de perfil"
            }
            onPress={onLaunchCamera}
            style={styles.btn}
          />

          <Button
            style={styles.btn}
            text={"Cerrar sesión"}
            onPress={onSignOut}
          />

          <Button
            style={styles.btn}
            text={"Tema claro"}
            onPress={() => onHandleSetTheme("light")}
          />

          <Button
            style={styles.btn}
            text={"Tema oscuro"}
            onPress={() => onHandleSetTheme("dark")}
          />

          <Button
            style={styles.btn}
            text={"Elegir categorias favoritas"}
            onPress={onHandleNavigateToFavCategories}
          />

        </View>

      </View>


    </PrincipalLayout>
  )
}

const styles = StyleSheet.create({
  perfilContainer: {
    flex: 1,
    marginBottom: 45
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "grey",
  },
  configContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    gap: 5
  },
  profileImage: {
    width: "90%",
    height: "90%",
    borderRadius: 150
  },
  btn: {
    width: "auto",
  }
})