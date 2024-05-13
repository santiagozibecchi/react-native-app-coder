import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { Button } from './Button';

export const Notice = ({ title, subtitle, onPress, textBtn = "Regresar" }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="alert-circle-outline" size={32} color={colors.warning} />
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

            {onPress && (
                <Button
                    text={textBtn}
                    onPress={onPress}
                    style={{
                        marginTop: 15
                    }}
                />)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        marginVertical: 20,
        borderColor: colors.warning,
        borderWidth: 1,
        borderRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.text,
        textAlign: 'center',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        marginTop: 5,
    },
});
