import { View, Image, StyleSheet, Pressable, Text } from 'react-native'
import { colors } from '../../constants/colors';

export const CategoryItem = ({ category, height, width }) => {

    // TODO: Al presionar en una de las categorías tengo que traer todos los lugares de deicha categoria
    return (
        <Pressable
            onPress={() =>console.log(category)}
            style={({ pressed }) => ({
                height,
                width,
                marginHorizontal: 3,
                paddingBottom: 20,
                paddingHorizontal: 5,
                opacity: pressed ? 0.9 : 1,
            })}
        >
            { category.title && <Text style={[styles.text, { color: colors.text }]}>{ category.title }</Text>}
            <View style={styles.imageContainer}>
                <Image
                    style={[styles.image, {width, height}]}
                    source={{uri: category.img}}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.24,
        shadowRadius: 18,
        elevation: 9,
    },
    text: {
        textAlign: "center",
    }
});