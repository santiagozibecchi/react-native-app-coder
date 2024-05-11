import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../../services/profileService'
import { useNavigation } from '@react-navigation/native'
import { PROFILE_COMPONENT } from './place_component'
import { Button } from '../../components/ui/Button'

export const UserProfileScreen = () => {
  const defaultImageRoute = "../../../assets/images/defaultProfile.png"

  const navigation = useNavigation();

  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: profileImageFromDB } = useGetProfileImageQuery(localId);

  const onLaunchCamera = () => {
    navigation.navigate(PROFILE_COMPONENT.image_selector)
  }

  return (
    <PrincipalLayout>

      <Title text='Perfil' center customStyles={{ fontSize: 24 }} />

      <View style={styles.perfilContainer}>

        <View style={styles.imageContainer}>
          { profileImageFromDB || imageCamera ? (
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
              ( profileImageFromDB || imageCamera )
                ? "Modificar la imagen de perfil"
                : "Agregar imagen de perfil"
            }
            onPress={onLaunchCamera}
            style={styles.btn}
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