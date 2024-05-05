import { useNavigation } from "@react-navigation/native";
import { PrincipalLayout } from "../../components/layout/PrincipalLayout";
import { Button } from "../../components/ui/Button";
import { Title } from "../../components/ui/Title";
import { PLACE_COMPONENT } from "./place_component";


export const PlaceDetailScreen = () => {

  const navigation = useNavigation();

    return (
      <PrincipalLayout>
        <Title text="Detalles de los lugares" />
  
        <Button
          text="Ver detalles"
          onPress={() => navigation.navigate(PLACE_COMPONENT.main_screen)}
          style={{
            width: 200
          }}
        />
      </PrincipalLayout>
    )
  }
