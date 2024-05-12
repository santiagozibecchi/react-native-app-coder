import { useDispatch, useSelector } from "react-redux";
import { updateFavouritePlace } from "../features/favourite/favouriteSlice";

export const useFavouritePlace = (placeId) => {
    const dispatch = useDispatch();
    const { favouritePlaceIds } = useSelector((state) => state.favourite.value);
  
    const onTouchFavourite = () => {
        dispatch(updateFavouritePlace({placeId}));
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
