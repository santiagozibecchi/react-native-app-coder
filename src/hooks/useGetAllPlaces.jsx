import { useEffect, useState } from 'react';
import { PlacesUtil, Sort } from '../utils/utils';
import { useSelector } from 'react-redux';
import { useGetAllPlacesQuery, useGetFavouriteCategoriesQuery } from '../services/placeService';

export const useGetImagePlaces = ({ numberOfCategory, placeId = null }) => {
    const [uiImagesCategory, setUiImageCategories] = useState([]);

    const { localId } = useSelector((state) => state.auth.value);
    const { data: fullData, isLoading: isLoadingFullData, error: errorFullData } = useGetAllPlacesQuery();
    const { data: favouriteCategories, isLoading: isLoadingFavCategories, error: errorFavCategories } = useGetFavouriteCategoriesQuery(localId);

    useEffect(() => {
        // Devnotes: El objetivo es que se ejecute generateUiImageCategories solamente cuando fullData && favouriteCategories esten completamente listos
        const isFullDataAndFavouriteCategoriesReadyToExecute = !isLoadingFullData && !errorFullData && !isLoadingFavCategories && !errorFavCategories && fullData && favouriteCategories;
        if (isFullDataAndFavouriteCategoriesReadyToExecute) {
            generateUiImageCategories();
        }
    }, [favouriteCategories, fullData]);

    const isDataUnavailable = isLoadingFullData || isLoadingFavCategories || errorFullData || errorFavCategories || !fullData || !favouriteCategories;
    if (isDataUnavailable) {
        // prevenimos la ejecución del código con datos incompletos...
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

    const generateUiImageCategories = () => {
        let allImagesByCategory = groupAllImagesByCategory();
        const categories = Object.keys(allImagesByCategory);
        const uiImageCategories = categories.map((category) => {
            let isFavourite = favouriteCategoriesArray.includes(category);

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
