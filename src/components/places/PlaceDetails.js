import { View, StyleSheet } from 'react-native'
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
    } = props;

    const uiTextSection = [
        { section: "Descripción", text: description, showInOneLine: false },
        { section: "Categoría", text: category, showInOneLine: true },
        { section: "País", text: country, showInOneLine: true },
        { section: "Cuidad", text: city, showInOneLine: true },
        { section: "Dirección", text: adress, showInOneLine: true },
        { section: "Total de visitas", text: viewsCount, showInOneLine: true },
        { section: "Rating", text: rating, showInOneLine: true },
    ]

    return (
        <View style={styles.container}>
            {
                uiTextSection.map((section) => (<TextSection {...section} />))
            }

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
