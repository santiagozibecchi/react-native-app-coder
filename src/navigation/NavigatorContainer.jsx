import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSession } from '../persistence'
import { setUser } from '../features/user/userSlice'

export const NavigatorContainer = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth.value);

    useEffect(() => {
        (async () => {
            try {
                const response = await getSession()
                if (response.rows._array.length) {
                    const user = response.rows._array[0];
                    // Primero nos fijamos si el usario se encuentra guardado de forma persistente 
                    // Esto evita que el usario se este logeando continuamente cada vez que se pierde el estado de redux
                    console.log({ user });
                    dispatch(setUser({
                        email: user.email,
                        localId: user.localId,
                        idToken: user.token
                    }))
                }
            } catch (error) {
                // TODO: componente error: console.log(error);
            }
        })()
    }, [])

    return (
        <NavigationContainer>
            {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}
