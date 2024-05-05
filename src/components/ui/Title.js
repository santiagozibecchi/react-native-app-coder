import { Text, StyleSheet } from 'react-native'
import { colors, globlalColors } from '../../constants/colors'

export const Title = ({ text = "", customStyles }) => {
    return (
        <Text
            style={[
                globlalColors.title,
                { color: colors.text },
                customStyles]}
        >
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "600",
        color: globlalColors.text
    }
})