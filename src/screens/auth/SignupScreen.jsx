import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputForm } from '../../components/ui/InputForm';
import { SubmitButton } from '../../components/ui/SubmitButton';
import { useSignUpMutation } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import { signupSchema } from '../../utils/validations/authSchema';

export const SignupScreen = () => {

    const navigation = useNavigation();
    // dispatch: disparar las acciones que se encuentras difinidas en los reducers
    const dispatch = useDispatch();
    const [triggerSignUp, signUpResult] = useSignUpMutation();

    const [signUp, setSignup] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        // error messages... could be in another state...
        errorMail: "",
        errorPassword: "",
        errorConfirmPassword: "",
    });

    useEffect(() => {
        if (signUpResult.isSuccess) {
            // seteamos el estado global del usuario
            dispatch(setUser({
                email: signUpResult.data.email,
                // idToken: ID único del usuario
                idToken: signUpResult.data.idToken,
            }))
        }
    }, [signUpResult])

    const handleSignup = () => {

        try {
            const validation = signupSchema.validateSync({ email: signUp.email, password: signUp.password, confirmPassword: signUp.confirmPassword });
            triggerSignUp({
                email: signUp.email,
                password: signUp.password,
                returnSecureToken: true,
            });
        } catch (error) {
            switch (error.path) {
                case "email":
                    setSignup({...signUp, errorMail: error.message})
                    break;
                case "password":
                    setSignup({...signUp, errorMail: error.message})
                case "confirmPassword":
                    setSignup({...signUp, errorConfirmPassword: error.message})
                default:
                    break;
            }
        }
    };

    const handleChange = (key, value) => {
        setSignup({ ...signUp, [key]: value });
    };

    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1483354483454-4cd359948304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrate</Text>
                <InputForm
                    placeholder="Email"
                    value={signUp.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
                {signUp.errorMail ? <Text style={styles.error}>{signUp.errorMail}</Text> : null}

                <InputForm
                    placeholder="Contraseña"
                    secureTextEntry
                    value={signUp.password}
                    onChangeText={(text) => handleChange('password', text)}
                />
                {signUp.errorPassword ? <Text style={styles.error}>{signUp.errorPassword}</Text> : null}

                <InputForm
                    placeholder="Confirmar contraseña"
                    secureTextEntry
                    value={signUp.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                />
                {signUp.errorConfirmPassword ? <Text style={styles.error}>{signUp.errorConfirmPassword}</Text> : null}
                
                <SubmitButton
                    title="Signup"
                    onPress={handleSignup}
                />

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginButtonText}>¿Ya tienes una cuenta? Ingresa desde acá</Text>
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
        marginBottom: 10
    }
});
