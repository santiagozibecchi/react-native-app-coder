import { Text, Pressable } from 'react-native'
import { colors, globlalColors } from '../../constants/colors'

export const Button = ({ text, style, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => ([
                globlalColors.btnPrimary,
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: colors.primary,
                },
                style,
            ])}
            onPress={onPress}
        >
            <Text style={{
                ...globlalColors.btnPrimaryText,
                color: colors.buttonTextColor,
            }}>{ text }</Text>
        </Pressable>
    )
}
