import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputForm } from '../../components/ui/InputForm';
import { SubmitButton } from '../../components/ui/SubmitButton';
import { useSignInMutation } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import { signInSchema } from '../../utils/validations/authSchema';

export const LoginScreen = () => {

  const navigation = useNavigation();
  // dispatch: disparar las acciones que se encuentras difinidas en los reducers
  const dispatch = useDispatch();
  const [triggerSignIn, signInResult] = useSignInMutation();

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    errorMail: "",
    errorPassword: "",
  })

  useEffect(() => {
    if (signInResult.isSuccess) {
      // seteamos el estado global del usuario
      dispatch(setUser({
        email: signInResult.data.email,
        // idToken: ID único del usuario
        idToken: signInResult.data.idToken,
        localId: signInResult.data.localId,
      }))
    }
  }, [signInResult])

  const onHandleLogin = () => {
    try {
      const validation = signInSchema.validateSync({ email: signIn.email, password: signIn.password });
      triggerSignIn({
        email: signIn.email,
        password: signIn.password,
      });
    } catch (error) {
      console.log({error});
      switch (error.path) {
        case "email":
          setErrorMessage({ ...errorMessage, errorMail: error.message })
          break;
        case "password":
          setErrorMessage({ ...errorMessage, errorPassword: error.message })
          break;
      }
    }
  };

  const handleChange = (key, value) => {
    setSignIn({ ...signIn, [key]: value });
  };

  return (
    <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1483354483454-4cd359948304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <InputForm
          placeholder="Email"
          value={signIn.email}
          onChangeText={(text) => {
            handleChange('email', text);
            errorMessage.errorMail = ""
          }}
          hasError={!!errorMessage.errorMail}
        />
        {errorMessage.errorMail ? <Text style={styles.error}>{errorMessage.errorMail}</Text> : null}

        <InputForm
          placeholder="Contraseña"
          secureTextEntry
          value={signIn.password}
          onChangeText={(text) => {
            handleChange('password', text);
            errorMessage.errorPassword = ""
          }}
          hasError={!!errorMessage.errorPassword}
        />
        {errorMessage.errorPassword ? <Text style={styles.error}>{errorMessage.errorPassword}</Text> : null}

        <SubmitButton
          title="Signup"
          onPress={onHandleLogin}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.loginButtonText}>¿Todavía no tienes una cuenta? Registrate acá</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  loginButtonText: {
    marginTop: 10,
    color: "white"
  },
  error: {
    color: 'red',
    marginBottom: 10,
    top: -10,
    fontWeight: "500"
  }
});
