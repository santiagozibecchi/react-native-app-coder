import { useNavigation } from "@react-navigation/native"
import { PrincipalLayout } from "../../components/layout/PrincipalLayout"
import { Title } from "../../components/ui/Title"
import { placesInfo } from "../../data/data"
import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Util } from "../../utils/utils"
import { PlaceList } from "../../components/places/PlaceList"
import { Notice } from "../../components/ui/Notice"

const allPlaces = placesInfo;

export const PlaceScreenListCategory = ({ route }) => {
  const [places, setPlaces] = useState([]);

  const navigation = useNavigation();
  const { category } = route.params;

  useEffect(() => {
    const filteredPlaces = allPlaces.filter((place) => {
      return place.category === category
    });
    setPlaces(filteredPlaces);
  }, [category])


  return (
    <PrincipalLayout style={{ marginBottom: 40 }}>
      <Title text={`Lista de ${Util.expandCategoryData(category).title}`} />
      {
        (places.length === 0)
          ? (<Notice
            title={`No se han encontrado lugares para la categoría: ${Util.expandCategoryData(category).title}`}
            onPress={() => navigation.goBack()}
          />)
          :
            <FlatList
              data={places}
              keyExtractor={(place) => place.id.toString()}
              renderItem={(({ item }) => <PlaceList place={item} />)}
              showsVerticalScrollIndicator={false}
            />
      }
    </PrincipalLayout>
  )
}
