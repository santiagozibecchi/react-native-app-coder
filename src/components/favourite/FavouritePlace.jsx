import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../../constants/colors';
import { useGetPlaceByIdQuery } from '../../services/placeService'

export const FavouritePlace = ({ favPlaceId }) => {

  const { data: place, isLoading } = useGetPlaceByIdQuery(favPlaceId);

  if (isLoading) {
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: place.images[0] }}
        />
      </View>
      <View style={[styles.detailContainer, { backgroundColor: colors.primary, opacity: 0.8 }]}>
        <View style={styles.placeContainer}>
          <View>
            <Text style={{ fontWeight: "bold" }}>{place.title}</Text>
            <Text>Rating: {place.rating}</Text>
            <Text>Ciudad: {place.city}</Text>
            <Text>categoría: {place.category}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  imageContainer: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  image: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    width: 150,
    height: 100
  },
  detailContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  placeContainer: {
    marginTop: 5,
    marginLeft: 5,
  }
})
