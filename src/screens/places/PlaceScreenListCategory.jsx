import { useState } from "react"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { PrincipalLayout } from "../../components/layout/PrincipalLayout"
import { Title } from "../../components/ui/Title"
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native"
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

  const [isTitleLong, setIsTitleLong] = useState(false);
  const { width: screenWidth } = useWindowDimensions();
  const titleText = `Lista de ${PlacesUtil.getExtraDetailFromCategory(category).title}`;
  const buttonWidth = 150;

  useEffect(() => {
    // Ancho del texto del título vs el ancho de la pantalla.
    const titleWidth = titleText.length * 15;
    setIsTitleLong(titleWidth > screenWidth - buttonWidth);
  }, [titleText, screenWidth]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <PrincipalLayout style={{ paddingBottom: 60 }}>
      <View style={[styles.headerContainer, isTitleLong && styles.headerContainerWrap]}>
        <Title text={titleText} />
        <Button
          onPress={() => navigation.goBack()}
          text={"Volver a categorías"}
          style={[styles.btn, { borderColor: colors.text, width: buttonWidth }]}
        />
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
  },
  headerContainerWrap: {
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
})
