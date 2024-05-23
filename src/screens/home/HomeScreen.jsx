import { ScrollView } from 'react-native'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'
import { HorizonalCarousel } from '../../components/places/HorizontalCarousel'
import { useGetImagePlaces } from '../../hooks/useGetAllPlaces'

export const HomeScreen = () => {

  // Este customHook se encarga de generar una N cantidad de objetos en base a su categoría,
  // para luego renderizar FlatLists (HorizonalCarousel) de forma dinámica
  const { uiImagesCategory } = useGetImagePlaces({numberOfCategory: 5});

  return (
    <ScrollView>
      <PrincipalLayout style={{paddingBottom: 60}}>
        <Title text='Galería de los lugares más cercanos a tu dirección' center />

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
