import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet } from "react-native"
import { LoginScreen } from "../screens/auth/LoginScreen"
import { SignupScreen } from "../screens/auth/SignupScreen"

const Stack = createStackNavigator()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                component={SignupScreen}
                name="Signup" />
            <Stack.Screen
                component={LoginScreen}
                name="Login"
            />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})