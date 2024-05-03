import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { PLACE_COMPONENT } from './place_component';

export const PlaceScreenListCategory = () => {

  const navigation = useNavigation();

  return (
    <View>
      
      <Button title='Ir a la lista de lugares' onPress={() => navigation.navigate(PLACE_COMPONENT.detail_screen)} />
    </View>
  )
}
