import { View } from 'react-native'
import { globlalColors } from '../../constants/colors'
import { useSelector } from 'react-redux';

// Also can recieve custom styles from parent component
export const PrincipalLayout = ({ children, style }) => {
  const { colors } = useSelector((state) => state.theme.value);

  return (
    <View style={
      [globlalColors.mainContainer, { backgroundColor: colors.background }, style]
    }>
      {children}
    </View>
  )
}
