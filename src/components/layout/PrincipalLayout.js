import { View, StyleSheet } from 'react-native'
import { globlalColors } from '../../constants/colors'

// Also can recieve custom styles from parent component
export const PrincipalLayout = ({ children, style }) => {
  return (
      <View style={
        [styles.container, style]
    }>
          { children }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: globlalColors.background
    }
})
