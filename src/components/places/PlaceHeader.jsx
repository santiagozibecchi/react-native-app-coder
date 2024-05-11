import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../../constants/colors';

export const PlaceHeader = ({ title, images }) => {
    const { height: screenHeight } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
                    <View style={styles.imageBorder}>
                        <Image
                            style={{ ...styles.posterImage }}
                            source={{ uri: images[0] }}
                        />
                    </View>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>

            <View style={styles.backButton}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Regresar</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    headerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleContainer: {
        textAlign: "center",
        backgroundColor: "white",
        bottom: 22,
        opacity: 10,
        width: "auto",
        padding: 8,
        borderRadius: 18,
        backgroundColor: colors.primary
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 35,
        left: 10,
        backgroundColor: colors.primary,
        borderRadius: 18,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    backButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});


