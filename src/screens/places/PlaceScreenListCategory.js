import { useNavigation } from "@react-navigation/native"
import { PrincipalLayout } from "../../components/layout/PrincipalLayout"
import { Button } from "../../components/ui/Button"
import { Title } from "../../components/ui/Title"
import { PLACE_COMPONENT } from "./place_component"
import { placesInfo } from "../../data/data"
import { useEffect, useState } from "react"
import { FlatList, ScrollView, Text, View } from "react-native"
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
    <PrincipalLayout>
      <Title text={`Lista de ${Util.expandCategoryData(category).title}`} />

      {/* <View>
          <Text>
            {JSON.stringify(places, null, 2)}
          </Text>
        </View> */}
      {
        (places.length === 0)
          ? (<Notice
            title={`No se han encontrado lugares para la categoría: ${Util.expandCategoryData(category).title}`}
            onPress={() => navigation.goBack()}
          />)
          :
          // <View style={{borderRadius: 15, flex: 1}}>
            <FlatList
              data={places}
              keyExtractor={(place) => place.id.toString()}
              renderItem={(({ item }) => <PlaceList place={item} />)}
              showsVerticalScrollIndicator={false}
              
            />
          // </View>
      }


      {/* <Button
        text="Ir a los detalles"
        onPress={() => navigation.navigate(PLACE_COMPONENT.detail_screen)}
        style={{
          width: 200
        }}
      /> */}
    </PrincipalLayout>
  )
}
