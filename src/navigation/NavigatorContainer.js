import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useSelector } from 'react-redux'

export const NavigatorContainer = () => {

    const { user } = useSelector(state => state.auth.value);
    console.log({user});
    return (
        <NavigationContainer>
            { user ? <BottomTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}
