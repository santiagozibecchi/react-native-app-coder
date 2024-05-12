import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { useSelector } from 'react-redux'
import { FavouritePlace } from '../../components/favourite/FavouritePlace'
import { Title } from '../../components/ui/Title';

export const FavouriteScreen = () => {
  const { favouritePlaceIds } = useSelector((state) => state.favourite.value);

  return (
    <PrincipalLayout>
      <Title text='Tus favoritos' center/>
      {favouritePlaceIds.map(favPlaceId => <FavouritePlace key={favPlaceId} favPlaceId={ favPlaceId } />)}
    </PrincipalLayout>
  );
}

