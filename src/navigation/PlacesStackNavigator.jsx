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
            {/* 
                PlaceDetailScreen podria ser util tenerlo solamente en un componente separado del Stack para hacerlo reutilizable.
                Es decir, dejaria de ser una pantalla, caso contrario no lo puedo re-utilizar en la pantalla de favoritos.
                ¿Qué es lo que pasa?
                Si muestro este Componente/Stack para ver los detalles de la lista de favoritos, llama a todo el Stack completo, por lo que cuando quiero
                volver atrás para ver mi lista de favoritos NO PUEDO porque el goback() en este punto es la lista de CATEGORIAS DE LUGARES (PlaceScreenListCategory)
            */}
            <Stack.Screen
                component={PlaceDetailScreen}
                name={PLACE_COMPONENT.detail_screen}
            />
        </Stack.Navigator>
    )
}
