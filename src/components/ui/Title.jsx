import { Text, StyleSheet } from 'react-native'
import { colors, globlalColors } from '../../constants/colors'

export const Title = ({ text = "", center = false, customStyles }) => {
    return (
        <Text
            style={
                [
                    globlalColors.title,
                    { color: colors.text },
                    (center ? { textAlign: "center" } : null),
                    customStyles
                ]}
        >
            {text}
        </Text>
    )
}