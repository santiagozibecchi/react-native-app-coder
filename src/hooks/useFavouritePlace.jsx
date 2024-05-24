import { useDispatch, useSelector } from "react-redux";
import { updateFavouritePlace } from "../features/favourite/favouriteSlice";
import { usePostFavouritePlaceIdsMutation } from "../services/placeService";
import { useEffect } from "react";

export const useFavouritePlace = (placeId) => {
    const dispatch = useDispatch();
    const [triggerPostFavouritePlaceIds, _] = usePostFavouritePlaceIdsMutation();
    const { favouritePlaceIds } = useSelector((state) => state.favourite.value);
    const { localId } = useSelector((state) => state.auth.value);
    
    const onTouchFavourite = () => {
        dispatch(updateFavouritePlace({ placeId }));
    }

    useEffect(() => {
        if (favouritePlaceIds.length > 0 && localId) {
            triggerPostFavouritePlaceIds({ favouritePlaceIds, localId });
        }
    }, [favouritePlaceIds, localId, triggerPostFavouritePlaceIds]);
    

    const isAFavouritePlace = () => {
        const isFavourite = favouritePlaceIds.findIndex((favId) => favId === placeId) !== -1;
        return isFavourite;
    }
  
  
    return {
        onTouchFavourite,
        isAFavouritePlace,
    }
}
