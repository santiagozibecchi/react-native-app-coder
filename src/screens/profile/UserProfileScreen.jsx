import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../../services/profileService'

export const UserProfileScreen = () => {
  const defaultImageRoute = "../../../assets/images/defaultProfile.png"

  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: profileImageFromDB } = useGetProfileImageQuery(localId);



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
    borderBottomColor: "grey"
  },
  configContainer: {
    flex: 1,
  },
  profileImage: {
    width: "90%",
    height: "90%",
    borderRadius: 150
  }
})