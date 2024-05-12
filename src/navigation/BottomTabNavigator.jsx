import { PlacesStackNavigator } from './PlacesStackNavigator';
import { HomeScreen } from '../screens/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons"
import { colors } from '../constants/colors';
import MyProfileStackNavigator from './ProfileStackNavigator';
import FavouriteStackNavigator from './FavouriteStackNavigator';


const Stack = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabContainer,
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <AntDesign name="home" size={24} color={focused ?  colors.itemSelected : colors.text} />
                            </View>
                        )
                    },
                }}
            />
            <Stack.Screen
                name="PlacesStack"
                component={PlacesStackNavigator}
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <MaterialIcons name="place" size={30} color={focused ? colors.itemSelected : colors.text} />
                            </View>
                        )
                    },
                }}
            />
            <Stack.Screen
                name="UserProfileStack"
                component={MyProfileStackNavigator}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="person-circle-outline" size={24} color={focused ?  colors.itemSelected : colors.text} />
                            </View>
                        )
                    },
                }}
            />
            <Stack.Screen
                name="favouriteStack"
                component={FavouriteStackNavigator}
                options={{
                    title: "Favourite",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="star-outline" size={24} color={focused ?  colors.itemSelected : colors.text} />
                            </View>
                        )
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        bottom: 5,
        marginHorizontal: 5,
        position: 'absolute',

        // Sombreado
        elevation: 2,
        shadowColor: '#423119',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 10,
        shadowRadius: 3,
    }
})