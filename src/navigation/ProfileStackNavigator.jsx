import { createStackNavigator } from "@react-navigation/stack"
import { PROFILE_COMPONENT } from "../screens/profile/place_component"
import { UserProfileScreen, ImageSelectorScreen } from "../screens/profile"
import { FavouriteCategoriesScreen } from "../screens/profile/FavouriteCategoriesScreen"

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
            <Stack.Screen component={FavouriteCategoriesScreen} name={PROFILE_COMPONENT.favouriteCategories} />
        </Stack.Navigator>
    )
}

export default MyProfileStackNavigator;

