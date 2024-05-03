import { useNavigation } from '@react-navigation/native'
import { Text, Button } from 'react-native'
import { PLACE_COMPONENT } from './place_component';
import { PrincipalLayout } from '../../components/layout/PrincipalLayout';

export const PlacesScreen = () => {
    const navigation = useNavigation();

    return (
        <PrincipalLayout>
            <Text>PlacesScreen</Text>
            <Button title='Ir a la lista de lugares' onPress={() => navigation.navigate(PLACE_COMPONENT.list_category_screen)} />
        </PrincipalLayout>
    )
}
