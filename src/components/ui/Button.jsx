import { Text, Pressable } from 'react-native'
import { globlalColors } from '../../constants/colors'
import { useSelector } from 'react-redux';

export const Button = ({ text, style, fontSize = null, onPress = () => { } }) => {

    const { colors } = useSelector((state) => state.theme.value);

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
                fontSize: fontSize ? fontSize : null
            }}>{text}</Text>
        </Pressable>
    )
}
