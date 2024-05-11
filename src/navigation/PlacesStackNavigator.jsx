import { createStackNavigator } from '@react-navigation/stack';
import { PlacesScreen, PlaceDetailScreen, PlaceScreenListCategory, PLACE_COMPONENT } from "../screens/places"

const Stack = createStackNavigator();

export const PlacesStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={PLACE_COMPONENT.main_screen}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                component={PlacesScreen}
                name={PLACE_COMPONENT.main_screen}
            />
            <Stack.Screen
                component={PlaceScreenListCategory}
                name={PLACE_COMPONENT.list_category_screen}
            />
            <Stack.Screen
                component={PlaceDetailScreen}
                name={PLACE_COMPONENT.detail_screen}
            />
        </Stack.Navigator>
    )
}
