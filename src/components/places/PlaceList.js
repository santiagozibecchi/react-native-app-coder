import { View, Text, StyleSheet, Image } from 'react-native'

export const PlaceList = ({ place }) => {

    console.log(place);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: place.images[0] }}
                />
            </View>
            <View style={styles.detailContainer}>

                <Text>PlaceList</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: "#b18a8a"
    },
    imageContainer: {
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 18,
        elevation: 9,
        width: 150,
        // height: 100
    },
    image: {
        width: 150,
        height: 100
    },
    detailContainer: {
        flex: 1,
        backgroundColor: "blue"
    }
})
