import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './BottomTabNavigator'

export const NavigatorContainer = () => {
    return (
        <NavigationContainer>
            {/* TODO: Auth Container */}
            <BottomTabNavigator />
        </NavigationContainer>
    )
}
