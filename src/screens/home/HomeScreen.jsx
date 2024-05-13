import { View, Text, StyleSheet } from 'react-native'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'

export const HomeScreen = () => {
  return (
    <PrincipalLayout>
      <Title text='Encuentra los lugares más cercanos a tu dirección' center />

      


    </PrincipalLayout>
  )
}

const styles = StyleSheet.create({
  title: {
  }
})
