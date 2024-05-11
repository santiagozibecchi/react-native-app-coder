import { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputForm } from '../../components/ui/InputForm';
import { SubmitButton } from '../../components/ui/SubmitButton';
import { useSignUpMutation } from '../../services/authService';

export const SignupScreen = () => {

    const navigation = useNavigation();

    const [triggerSignUp, result] = useSignUpMutation();

    const [signUp, setSignup] = useState({
        email: "",
        errorMail: "",
        password: "",
        errorPassword: "",
        confirmPassword: "",
        errorConfirmPassword: "",
    });

    const handleSignup = () => {
        triggerSignUp({
            email: signUp.email,
            password: signUp.password,
            returnSecureToken: true,
        })
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
