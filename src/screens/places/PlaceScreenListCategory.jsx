import { useNavigation } from "@react-navigation/native"
import { PrincipalLayout } from "../../components/layout/PrincipalLayout"
import { Title } from "../../components/ui/Title"
import { FlatList, StyleSheet, View } from "react-native"
import { PlacesUtil } from "../../utils/utils"
import { PlaceList } from "../../components/places/PlaceList"
import { Notice } from "../../components/ui/Notice"
import { useGetPlacesByCategoryQuery } from "../../services/placeService"
import { LoadingSpinner } from "../../components/ui/LoadingSpinner"
import { Button } from "../../components/ui/Button"
import { useSelector } from "react-redux"

export const PlaceScreenListCategory = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;

  const { colors } = useSelector((state) => state.theme.value);

  const { data: places, isLoading } = useGetPlacesByCategoryQuery(category);

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <PrincipalLayout style={{ paddingBottom: 60 }}>
      <View style={styles.headerContainer  }>
        <Title text={`Lista de ${PlacesUtil.getExtraDetailFromCategory(category).title}`} />
        <Button onPress={() => navigation.goBack()} text={"Volver a categorías"} style={[styles.btn, { borderColor: colors.text }]}/>
      </View>
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

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
  }
})
