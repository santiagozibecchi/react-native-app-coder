import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'

export const UserProfileScreen = () => {
  return (
    <PrincipalLayout>

      <Title text='Perfil' center customStyles={{ fontSize: 24 }} />
      
      <View style={styles.perfilContainer}>

        <View style={styles.imageContainer}>
          
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
    backgroundColor: "grey",
    marginBottom: 45
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "red"
  },
  configContainer: {
    flex: 1,
  }
})