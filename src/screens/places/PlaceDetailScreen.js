import { ScrollView } from "react-native";
import { PlaceHeader } from "../../components/places/PlaceHeader";
import { PlaceDetails } from "../../components/places/PlaceDetails";


export const PlaceDetailScreen = ({ route }) => {

  const { place } = route.params;

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
