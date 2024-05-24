import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

export const LoadingSpinner = () => {
    const { colors } = useSelector((state) => state.theme.value);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[styles.loadingText, { color: colors.primary, backgroundColor: colors.background }]}>Cargando...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 15,
        fontSize: 18,
    },
});
