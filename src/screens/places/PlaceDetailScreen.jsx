import { ScrollView } from "react-native";
import { PlaceHeader } from "../../components/places/PlaceHeader";
import { PlaceDetails } from "../../components/places/PlaceDetails";
import { useGetPlaceByIdQuery } from "../../services/placeService";


export const PlaceDetailScreen = ({ route }) => {

  const { placeId } = route.params;

  const { data: place, isLoading } = useGetPlaceByIdQuery(placeId);

  if (isLoading) {
    // TODO loading component
    return;
  }

    return (
        <ScrollView>
        <PlaceHeader
          title={place.title}
          images={place.images}
        />

        <PlaceDetails {...place} />
        
        </ScrollView>
    )
  }
