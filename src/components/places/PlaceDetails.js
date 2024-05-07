import { View, Text, StyleSheet } from 'react-native'
import { TextSection } from '../ui/TextSection';

export const PlaceDetails = (props) => {
    const {
        description,
        category,
        country,
        adress,
        city,
        viewsCount,
        rating,
    } = props

  return (
      <View style={styles.container}>
          
        <TextSection section={"Descripción"} text={description} />
        <TextSection section={"Categoría"} text={category} showInOneLine />
        <TextSection section={"País"} text={country} showInOneLine />
        <TextSection section={"Cuidad"} text={city} showInOneLine />
        <TextSection section={"Dirección"} text={adress} showInOneLine />
        <TextSection section={"Total de visitas"} text={viewsCount} showInOneLine />
        <TextSection section={"Rating"} text={rating} showInOneLine />
          
        {/* TODO: Galeria de imagenes */}


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginBottom: 140
    },
    text: {
        fontWeight: "bold"
    }
})
