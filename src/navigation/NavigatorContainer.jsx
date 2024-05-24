import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { useContext, useEffect } from 'react'
import { getSession } from '../persistence'
import { setUser } from '../features/user/userSlice'
import { ErrorContext } from '../context/ErrorContext'

export const NavigatorContainer = () => {

    const { showError } = useContext(ErrorContext);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth.value);

    useEffect(() => {
        (async () => {
            try {
                const session = await getSession()
                if (session.rows._array.length) {
                    const user = session.rows._array[0];
                    console.log({user});
                    // Primero nos fijamos si el usario se encuentra guardado de forma persistente 
                    // Esto evita que el usario se este logeando continuamente cada vez que se pierde el estado de redux
                    dispatch(setUser({
                        email: user.email,
                        localId: user.localId,
                        idToken: user.token
                    }))
                }
            } catch (error) {
                showError("Error al obtener la sesión del usuario.")
            }
        })()
    }, [])

    return (
        <NavigationContainer>
            {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}
