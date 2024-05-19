import React, { useContext } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ErrorContext } from "../../context/ErrorContext";

export const ErrorModal = () => {
    const { error, setError } = useContext(ErrorContext);

    if (!error) {
        return null
    };

    const handleClose = () => {
        setError(null);
    };

    return (
        <Modal transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.errorText}>{error}</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 320,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    errorText: {
        color: "#D8000C",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: "#D8000C",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});