import { HomeScreen } from '../screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlacesScreen } from '../screens/places/PlacesScreen';
import { UserProfileScreen } from '../screens/profile/UserProfileScreen';
import { View } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons"

const Stack = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "red",
        }}>

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <AntDesign name="home" size={24} color={focused ? "black" : "green"} />
                            </View>
                        )
                    },
                }}
            />

            <Stack.Screen
                name="PlacesScreen"
                component={PlacesScreen}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="place" size={30} color={focused ? "black" : "green"} />
                            </View>
                        )
                    },
                }}
            />

            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons
                                    name="person-circle-outline"
                                    size={24}
                                    color={focused ? "black" : "green"}
                                />
                            </View>
                        )
                    },
                }}
            />

        </Stack.Navigator>
    );
}