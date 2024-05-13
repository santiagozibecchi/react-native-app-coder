import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { useSelector } from 'react-redux'
import { FavouritePlace } from '../../components/favourite/FavouritePlace'
import { Title } from '../../components/ui/Title';
import { ScrollView, StyleSheet } from 'react-native';

export const FavouriteScreen = () => {
  const { favouritePlaceIds } = useSelector((state) => state.favourite.value);

  return (
    <ScrollView >
      <PrincipalLayout style={{ marginBottom: 40 }}>
        <Title text='Tus favoritos' center />
        {favouritePlaceIds.map(favPlaceId => <FavouritePlace key={favPlaceId} favPlaceId={favPlaceId} />)}
      </PrincipalLayout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60
  }
})