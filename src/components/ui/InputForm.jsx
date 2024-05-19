import { StyleSheet, TextInput } from "react-native";

export const InputForm = ({ placeholder, value, onChangeText, secureTextEntry, hasError }) => {
    return (
        <TextInput
            style={[styles.input, hasError ? styles.error : null]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    error: {
        borderBottomColor: "red",
        borderBottomWidth: 1.5
    }
});
