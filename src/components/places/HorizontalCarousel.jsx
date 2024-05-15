import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import { PlacesUtil } from '../../utils/utils';

export const HorizonalCarousel = ({ category, images }) => {

    return (
        <View
            style={{ height: category ? 260 : 220 }}
        >
            {
                category && (
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "300",
                            marginLeft: 10,
                            marginBottom: 10,
                        }}
                    >
                        { PlacesUtil.expandCategoryData(category).title }
                    </Text>
                )
            }

            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => { }}
                        style={({ pressed }) => ({
                            height: 200,
                            width: 200,
                            marginHorizontal: 3,
                            paddingBottom: 20,
                            paddingHorizontal: 5,
                            opacity: pressed ? 0.9 : 1,
                        })}
                    >
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.category}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});