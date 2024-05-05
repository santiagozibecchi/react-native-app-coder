import { View } from 'react-native'
import { colors, globlalColors } from '../../constants/colors'

// Also can recieve custom styles from parent component
export const PrincipalLayout = ({ children, style }) => {
  return (
      <View style={
      [globlalColors.mainContainer, { backgroundColor: colors.background}, style]
    }>
          { children }
    </View>
  )
}
