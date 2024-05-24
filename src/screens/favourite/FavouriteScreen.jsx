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
import { setFavouritePlaces } from '../../features/favourite/favouriteSlice';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

export const FavouriteScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { colors } = useSelector((state) => state.theme.value);

  const { favouritePlaceIds } = useSelector((state) => state.favourite.value);
  const { localId } = useSelector((state) => state.auth.value);
  const { data: favouritePlaceIdsFromDB, isLoading, isSuccess } = useGetFavouritePlaceIdsQuery(localId);

  useEffect(() => {
    // Se ejecuta cuando se monta por primera vez y cuando se guarda nuevos ids en el array de
    // con la idea de manejar un solo estado para mostrar los favoritos
    if (isSuccess && Array.isArray(favouritePlaceIdsFromDB)) {
      dispatch(setFavouritePlaces(favouritePlaceIdsFromDB));
    }
  }, [isSuccess, favouritePlaceIdsFromDB, dispatch]);

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <PrincipalLayout style={{ paddingBottom: 60 }}>
        <Title text='Tus favoritos' center />
        {
          (favouritePlaceIds.length === 0) ? (
            <Notice
              title={"No tienes favoritos guardados"}
              subtitle={"¿Desea ver las categorías?"}
              textBtn={"Ver"}
              /*
                * Esto resuelve una advertencia de error: Dev notes: https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
                Do you have a screen named 'PlacesScreen'?
                ERROR  The action 'NAVIGATE' with payload {"name":"PlacesScreen"} was not handled by any navigator.
              */
              onPress={() => navigation.navigate("PlacesStack", { screen : PLACE_COMPONENT.main_screen})}
            />
          ) : (
            favouritePlaceIds.map((favPlaceId) => <FavouritePlace key={favPlaceId} favPlaceId={favPlaceId} />)
          )
        }
      </PrincipalLayout>
    </ScrollView>
  );
}