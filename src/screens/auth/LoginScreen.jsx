import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const LoginScreen = () => {

    const [login, setLogin] = useState({
        email: "",
        errorMail: "",
        password: "",
        errorPassword: "",
        errorConfirmPassword: "",
    })

  return (
      <View style={styles.loginContainer}>
          
      <Text>HOLA</Text>
          
    </View>
  )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    }
})