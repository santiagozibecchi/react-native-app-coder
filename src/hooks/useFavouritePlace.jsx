import { useDispatch, useSelector } from "react-redux";
import { updateFavouritePlace } from "../features/favourite/favouriteSlice";
import { usePostFavouritePlaceIdsMutation } from "../services/placeService";

export const useFavouritePlace = (placeId) => {
    const dispatch = useDispatch();
    const { favouritePlaceIds } = useSelector((state) => state.favourite.value);
    const { localId } = useSelector((state) => state.auth.value);

    const [triggerPostFavouritePlaceIds, _] = usePostFavouritePlaceIdsMutation();
  
    const onTouchFavourite = () => {
        dispatch(updateFavouritePlace({ placeId }));
        // servicio para guardar los ids en RTD
        triggerPostFavouritePlaceIds({ favouritePlaceIds, localId });
    }

    const isAFavouritePlace = () => {
        const isFavourite = favouritePlaceIds.findIndex((favId) => favId === placeId) !== -1;
        return isFavourite;
    }
  
  
    return {
        onTouchFavourite,
        isAFavouritePlace,
    }
}
