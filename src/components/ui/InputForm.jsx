import { StyleSheet, TextInput } from "react-native";

export const InputForm = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
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
});
