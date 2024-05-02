import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { PLACE_COMPONENT } from './place_component';

export const PlaceDetailScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>PlaceDetailScreen</Text>
      <Button title='Volver atrás' onPress={() => navigation.navigate(PLACE_COMPONENT.list_category_screen)} />
    </View>
  )
}
