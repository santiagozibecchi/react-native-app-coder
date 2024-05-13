import { useEffect } from 'react';
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { useDispatch, useSelector } from 'react-redux'
import { FavouritePlace } from '../../components/favourite/FavouritePlace'
import { Title } from '../../components/ui/Title';
import { ScrollView } from 'react-native';
import { Notice } from '../../components/ui/Notice';
import { useNavigation } from '@react-navigation/native';
import { PLACE_COMPONENT } from '../places/place_component';
import { useGetFavouritePlaceIdsQuery } from '../../services/placeService';
import { updateFavouritePlaceIds } from '../../features/favourite/favouriteSlice';

export const FavouriteScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigation();

  const { favouritePlaceIds } = useSelector((state) => state.favourite.value);
  const { localId } = useSelector((state) => state.auth.value);
  const { data: favouritePlaceIdsFromDB, isLoading } = useGetFavouritePlaceIdsQuery(localId);

  useEffect(() => {
    // Se ejecuta cuando se monta por primera vez y cuando se guarda nuevos ids en el array de
    // con la idea de manejar un solo estado para mostrar los favoritos
    if (!isLoading && favouritePlaceIdsFromDB) {
      dispatch(updateFavouritePlaceIds(favouritePlaceIdsFromDB));
    }
  }, [isLoading, favouritePlaceIdsFromDB, dispatch]);

  if (isLoading) {
    return;
  }

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