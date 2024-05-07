import { View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../../constants/colors';
import { Button } from '../ui/Button';
import { useNavigation } from '@react-navigation/native';
import { PLACE_COMPONENT } from '../../screens/places/place_component';

export const PlaceList = ({ place }) => {

    const navigation = useNavigation();
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
                        <Text style={{fontWeight: "bold"}}>{place.title}</Text>
                        <Text>Rating: {place.rating}</Text>
                        <Text>Ciudad: {place.city}</Text>
                    </View>

                    <Button
                        text="Ver más"
                        fontSize={14}
                        style={styles.button}
                        onPress={() => navigation.navigate(PLACE_COMPONENT.detail_screen, {place, place})}
                    />
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
    },
    button: {
        position: "absolute",
        color: "white",
        width: 80,
        height: 25,
        padding: 3,
        alignSelf: "flex-end",
        right: 5,
    }
})
