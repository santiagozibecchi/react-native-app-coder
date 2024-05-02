import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { PLACE_COMPONENT } from './place_component';

export const PlacesScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>PlacesScreen</Text>
            <Button title='Ir a la lista de lugares' onPress={() => navigation.navigate(PLACE_COMPONENT.list_category_screen)} />
        </View>
    )
}
