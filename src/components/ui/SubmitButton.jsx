import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const SubmitButton = ({ title, onPress }) => {

    const { colors } = useSelector((state) => state.theme.value);

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]} onPress={onPress}>
            <Text style={styles.signupButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    signupButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
});
