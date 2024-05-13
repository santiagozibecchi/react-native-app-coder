import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { useSelector } from 'react-redux'
import { FavouritePlace } from '../../components/favourite/FavouritePlace'
import { Title } from '../../components/ui/Title';
import { ScrollView } from 'react-native';
import { Notice } from '../../components/ui/Notice';
import { useNavigation } from '@react-navigation/native';
import { PLACE_COMPONENT } from '../places/place_component';

export const FavouriteScreen = () => {
  const { favouritePlaceIds } = useSelector((state) => state.favourite.value);

  const navigate = useNavigation();

  return (
    <ScrollView >
      <PrincipalLayout style={{ marginBottom: 40 }}>
        <Title text='Tus favoritos' center />

        {
          (favouritePlaceIds.length === 0) ? (
            <Notice
              title={"No tienes favoritos guardados"}
              subtitle={"¿Desea ver las categorías?"}
              textBtn={"Ver"}
              onPress={() => navigate.navigate(PLACE_COMPONENT.main_screen)}
            />
          ): (
            favouritePlaceIds.map((favPlaceId) => <FavouritePlace key={favPlaceId} favPlaceId={favPlaceId} />)   
          )
        }
      </PrincipalLayout>
    </ScrollView>
  );
}