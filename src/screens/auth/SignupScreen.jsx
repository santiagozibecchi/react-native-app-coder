import { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InputForm } from '../../components/ui/InputForm';
import { SubmitButton } from '../../components/ui/SubmitButton';

export const SignupScreen = () => {

    const navigation = useNavigation();

    const [signup, setSignup] = useState({
        email: "",
        errorMail: "",
        password: "",
        errorPassword: "",
        confirmPassword: "",
        errorConfirmPassword: "",
    });

    const handleSignup = () => {
        console.log('Signup:', signup);
    };

    const handleChange = (key, value) => {
        setSignup({ ...signup, [key]: value });
    };

    return (
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1483354483454-4cd359948304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Registrate</Text>
                <InputForm
                    placeholder="Email"
                    value={signup.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
                {signup.errorMail ? <Text style={styles.error}>{signup.errorMail}</Text> : null}

                <InputForm
                    placeholder="Contraseña"
                    secureTextEntry
                    value={signup.password}
                    onChangeText={(text) => handleChange('password', text)}
                />
                {signup.errorPassword ? <Text style={styles.error}>{signup.errorPassword}</Text> : null}

                <InputForm
                    placeholder="Confirmar contraseña"
                    secureTextEntry
                    value={signup.confirmPassword}
                    onChangeText={(text) => handleChange('confirmPassword', text)}
                />
                {signup.errorConfirmPassword ? <Text style={styles.error}>{signup.errorConfirmPassword}</Text> : null}

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
