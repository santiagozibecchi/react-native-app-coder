import { Text } from 'react-native'
import { globlalColors } from '../../constants/colors'
import { useSelector } from 'react-redux';

export const Title = ({ text = "", center = false, customStyles }) => {

    const { colors } = useSelector((state) => state.theme.value);

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