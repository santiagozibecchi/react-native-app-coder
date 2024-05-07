import { NavigationContainer } from '@react-navigation/native'
// import { BottomTabNavigator } from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'

export const NavigatorContainer = () => {
    return (
        <NavigationContainer>
            {/* TODO: Auth Container */}
            {/* <BottomTabNavigator /> */}
            <AuthStackNavigator />
        </NavigationContainer>
    )
}
