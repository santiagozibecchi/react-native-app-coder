import { ScrollView } from 'react-native'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'
import { HorizonalCarousel } from '../../components/places/HorizontalCarousel'
import { useGetImagePlaces } from '../../hooks/useGetAllPlaces'

export const HomeScreen = () => {

  const { uiImagesCategory } = useGetImagePlaces({numberOfCategory: 5});

  return (
    <ScrollView>
      <PrincipalLayout style={{marginBottom: 40}}>
        <Title text='Encuentra los lugares más cercanos a tu dirección' center />

        {
          uiImagesCategory.map((ui) => (
            <HorizonalCarousel
              key={ui.title}
              title={ui.title}
              images={ui.images}
              isFavourite={ui.isFavourite}
            />
          ))
        }

      </PrincipalLayout>
    </ScrollView>
  )
}
