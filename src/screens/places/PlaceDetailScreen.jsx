import { ScrollView } from "react-native";
import { PlaceHeader } from "../../components/places/PlaceHeader";
import { PlaceDetails } from "../../components/places/PlaceDetails";
import { useGetPlaceByIdQuery } from "../../services/placeService";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../components/ui/LoadingSpinner";

export const PlaceDetailScreen = ({ route }) => {

  const { placeId } = route.params;
  const { colors } = useSelector((state) => state.theme.value);

  const { data: place, isLoading } = useGetPlaceByIdQuery(placeId);

  if (isLoading) {
    return <LoadingSpinner />
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
