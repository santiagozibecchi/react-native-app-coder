import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';
import * as Icon from '../icons';
import { useSelector } from 'react-redux';

export const Notice = ({ title, subtitle, onPress, textBtn = "Regresar" }) => {

    const { colors } = useSelector((state) => state.theme.value);

    return (
        <View style={[styles.container, { borderColor: colors.warning }]}>
            <Icon.Warn size={32} color={colors.warning} />
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            {subtitle && <Text style={[styles.subtitle, { color: colors.text }]}>{subtitle}</Text>}

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
        borderWidth: 1,
        borderRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
});
