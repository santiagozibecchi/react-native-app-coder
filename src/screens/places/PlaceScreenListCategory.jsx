import { useNavigation } from "@react-navigation/native"
import { PrincipalLayout } from "../../components/layout/PrincipalLayout"
import { Title } from "../../components/ui/Title"
import { FlatList } from "react-native"
import { PlacesUtil } from "../../utils/utils"
import { PlaceList } from "../../components/places/PlaceList"
import { Notice } from "../../components/ui/Notice"
import { useGetPlacesByCategoryQuery } from "../../services/placeService"

export const PlaceScreenListCategory = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;

  const { data: places, isLoading } = useGetPlacesByCategoryQuery(category);

  if (isLoading) {
    // TODO componente loading
    return;
  }

  return (
    <PrincipalLayout style={{ marginBottom: 40 }}>
      <Title text={`Lista de ${PlacesUtil.getExtraDetailFromCategory(category).title}`} />
      {
        (places.length === 0)
          ? (<Notice
            title={`No se han encontrado lugares para la categoría: ${PlacesUtil.getExtraDetailFromCategory(category).title}`}
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
