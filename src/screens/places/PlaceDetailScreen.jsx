import { ScrollView } from "react-native";
import { PlaceHeader } from "../../components/places/PlaceHeader";
import { PlaceDetails } from "../../components/places/PlaceDetails";
import { useGetPlaceByIdQuery } from "../../services/placeService";
import { useSelector } from "react-redux";

export const PlaceDetailScreen = ({ route }) => {

  const { placeId } = route.params;
  const { colors } = useSelector((state) => state.theme.value);

  const { data: place, isLoading } = useGetPlaceByIdQuery(placeId);

  if (isLoading) {
    // TODO loading component
    return;
  }

    return (
        <ScrollView style={{ backgroundColor: colors.background }}>
        <PlaceHeader
          title={ place.title }
          images={ place.images }
          placeId={ placeId }
        />

        <PlaceDetails {...place} />
        
        </ScrollView>
    )
  }
