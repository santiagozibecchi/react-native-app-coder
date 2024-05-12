import { View, Text } from 'react-native'
import { useGetPlaceByIdQuery } from '../../services/placeService'

export const FavouritePlace = ({ favPlaceId }) => {
    
    const { data: place, isLoading, isSuccess } = useGetPlaceByIdQuery(favPlaceId);

  return (
    <View>
      <Text>FavouritePlace</Text>
    </View>
  )
}
