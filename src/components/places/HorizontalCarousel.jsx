import { useRef, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import { colors } from '../../constants/colors';

export const HorizonalCarousel = ({ title, images }) => {

    const allImagesRef = useRef(images);
    const incrementRef = useRef(4);
    const intialImagesToLoad = images.slice(0, 4)
    const [displayedImages, setDisplayedImages] = useState(intialImagesToLoad);

    // VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent,
    // shouldComponentUpdate, etc. { "contentLength": 5146.54541015625, "dt": 433259, "prevDt": 10086 }

    const onLoadMoreImages = () => {
        incrementRef.current += 4
        setDisplayedImages(allImagesRef.current.slice(0, incrementRef.current));
    }

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
                        {title}
                    </Text>
                )
            }

            <FlatList
                data={displayedImages}
                keyExtractor={(_, index) => index.toString()}
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

                ListFooterComponent={() => (
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