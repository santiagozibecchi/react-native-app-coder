import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet } from "react-native"
import { PROFILE_COMPONENT } from "../screens/profile/place_component"
import { UserProfileScreen } from "../screens/profile/UserProfileScreen"
import { ImageSelectorScreen } from "../screens/profile/ImageSelectorScreen"

const Stack = createStackNavigator()

const MyProfileStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={PROFILE_COMPONENT.main_screen}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={UserProfileScreen} name={PROFILE_COMPONENT.main_screen} />
            <Stack.Screen component={ImageSelectorScreen} name={PROFILE_COMPONENT.image_selector} />
        </Stack.Navigator>
    )
}

export default MyProfileStackNavigator

const styles = StyleSheet.create({})
