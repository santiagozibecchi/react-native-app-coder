import { useNavigation } from "@react-navigation/native"
import { PrincipalLayout } from "../../components/layout/PrincipalLayout"
import { Button } from "../../components/ui/Button"
import { Title } from "../../components/ui/Title"
import { PLACE_COMPONENT } from "./place_component"

export const PlaceScreenListCategory = () => {
  const navigation = useNavigation();

  return (
    <PrincipalLayout>
      <Title text="Place List" />

      <Button
        text="Ir a los detalles"
        onPress={() => navigation.navigate(PLACE_COMPONENT.detail_screen)}
        style={{
          width: 200
        }}
      />
    </PrincipalLayout>
  )
}
