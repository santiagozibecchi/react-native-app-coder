import { HomeScreen } from '../screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlacesScreen } from '../screens/places/PlacesScreen';
import { UserProfileScreen } from '../screens/profile/UserProfileScreen';

const Stack = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false,
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PlacesScreen" component={PlacesScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
  );
}