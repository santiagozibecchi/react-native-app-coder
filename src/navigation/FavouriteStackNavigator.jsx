import { createStackNavigator } from "@react-navigation/stack"
import { FAVOURITE_COMPONENT } from "../screens/favourite/favourite_component";
import { FavouriteScreen } from "../screens/favourite/FavouriteScreen";


const Stack = createStackNavigator()

const FavouriteStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={FAVOURITE_COMPONENT.main_screen}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                component={FavouriteScreen}
                name={FAVOURITE_COMPONENT.main_screen}
            />
        </Stack.Navigator>
    )
}

export default FavouriteStackNavigator;



