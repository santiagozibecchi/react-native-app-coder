import { placesInfo } from '../data/data';
import { useEffect, useState } from 'react';
import { PlacesUtil, Sort } from '../utils/utils';
import { useSelector } from 'react-redux';
import { useGetFavouriteCategoriesQuery } from '../services/placeService';

export const fullData = placesInfo;

export const useGetImagePlaces = ({ numberOfCategory, placeId = null }) => {
    const [uiImagesCategory, setUiImageCategories] = useState([]);

    const { localId } = useSelector((state) => state.auth.value);
    const { data: favouriteCategories, isLoading, error } = useGetFavouriteCategoriesQuery(localId);

    if (isLoading || error) {
        return { uiImagesCategory };
    }

    const favouriteCategoriesArray = Array.isArray(favouriteCategories) ? favouriteCategories : [];

    const groupAllImagesByCategory = () => {
        let imagesByCategory = {};

        fullData.forEach((place) => {
            const category = place.category;
            const images = place.images;

            if (imagesByCategory[category]) {
                imagesByCategory[category].push(...images);
            } else {
                imagesByCategory[category] = [...images];
            }
        });
        return imagesByCategory;
    };

    useEffect(() => {
        generateUiImageCategories();
    }, [favouriteCategories]);

    const generateUiImageCategories = () => {
        let allImagesByCategory = groupAllImagesByCategory();
        const categories = Object.keys(allImagesByCategory);
        const uiImageCategories = categories.map((category) => {
            let isFavourite = false;
            if (favouriteCategoriesArray.includes(category)) {
                isFavourite = true;
            }

            return {
                category: category,
                images: allImagesByCategory[category],
                isFavourite: isFavourite,
                title: PlacesUtil.getExtraDetailFromCategory(category).title,
            };
        });

        // Favourite categories
        const favoutiteUiImageCategories = Sort.orderAlphabetically(
            uiImageCategories.filter((ui) => favouriteCategoriesArray.includes(ui.category)),
            'title'
        );
        // Non-favourite categories
        const restUiImageCategories = uiImageCategories.filter((ui) => !favouriteCategoriesArray.includes(ui.category));
        const restUiImageCategoriesToShow = restUiImageCategories.slice(0, numberOfCategory);
        const restUiImageCategoriesSorted = Sort.orderAlphabetically(restUiImageCategoriesToShow, 'title');
        const finalUiImagesCategories = favoutiteUiImageCategories.concat(restUiImageCategoriesSorted);

        setUiImageCategories(finalUiImagesCategories);
    };

    return {
        uiImagesCategory,
    };
};
