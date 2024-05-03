import { View, Text } from 'react-native'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'

export const HomeScreen = () => {
  return (
    <PrincipalLayout>
      <Title text='Hola mundo Ahre' />
    </PrincipalLayout>
  )
}
