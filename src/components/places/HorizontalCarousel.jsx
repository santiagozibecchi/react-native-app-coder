import { View, Text, FlatList, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { colors } from '../../constants/colors';
import { useLoadImagesLazy } from '../../hooks/useLoadImagesLazy';
import { memo } from 'react';
import { Ionicons } from "@expo/vector-icons"



export const RenderItem = memo(({ item }) => (
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
));

export const HorizonalCarousel = ({ title, images, isFavourite }) => {

    const { displayedImages, onLoadMoreImages, hasMoreImagesToLoad } = useLoadImagesLazy(images);


    return (
        <View
            style={{ height: title ? 260 : 220 }}
        >
            {
                title && (
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "300",
                            marginLeft: 10,
                            marginBottom: 10,
                        }}
                    >
                        {title} { isFavourite ? (<Ionicons name="star" size={24} color={colors.primary}/>) : null}
                    </Text>
                )
            }

            <FlatList
                data={displayedImages}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (<RenderItem item={ item } />)}

                ListFooterComponent={() => hasMoreImagesToLoad() && (
                    <View style={{ height: 150, justifyContent: "center" }}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )}

                horizontal
                showsHorizontalScrollIndicator={false}
                onEndReached={onLoadMoreImages}
                onEndReachedThreshold={0.6}
                initialNumToRender={4}
                windowSize={5}
                maxToRenderPerBatch={4}
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