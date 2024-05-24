import React, { useEffect } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export const CustomModal = ({ message, onClose }) => {

    const { colors } = useSelector((state) => state.theme.value);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);
        /*
            Cualquier temporizador pendiente se cancela....
            La función de limpieza evita que se ejecute un onClose atrasado si el "message"
            o "onClose" cambian antes de que se complete el temporizador.
        */
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) {
        return null;
    }

    return (
        <Modal transparent={true} animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={[styles.messageText, { color: colors.primary } ]}>{message}</Text>
                    <TouchableOpacity style={[styles.closeButton, { backgroundColor: colors.primary }]} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 320,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    messageText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
    },
    closeButton: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
