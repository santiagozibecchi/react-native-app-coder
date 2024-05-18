import { placesInfo } from '../data/data';
import { useEffect, useState } from 'react';
import { PlacesUtil, Sort } from '../utils/utils';

export const fullData = placesInfo

export const useGetImagePlaces = ({numberOfCategory, placeId = null}) => {

    // const { data: allPlaces, isSuccess } = useGetAllPlacesQuery();

    const [uiImagesCategory, setUiImageCategories] = useState([]);

    // TODO Obtener de la base de datos, seria interesando customizarlo :)
    const favouriteCategories = ["ice-cream-parlors", "bars"]

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
        })
        return imagesByCategory;
    }

    useEffect(() => {
            generateUiImageCategories();
    }, []);

    const generateUiImageCategories = () => {
        let allImagesByCategory = groupAllImagesByCategory();
        const categories = Object.keys(allImagesByCategory);
        const uiImageCategories = categories.map((category) => {

            let isFavourite = false;
            if (favouriteCategories.includes(category)) {
                isFavourite = true;
            }

            return {
                category: category,
                images: allImagesByCategory[category],
                isFavourite: isFavourite,
                title: PlacesUtil.getExtraDetailFromCategory(category).title,
            }
        })

        // Favoritas
        const favoutiteUiImageCategories = Sort.orderAlphabetically(uiImageCategories.filter((ui) => favouriteCategories.includes(ui.category)), 'title');
        // No favoritas
        const restUiImageCategories = uiImageCategories.filter((ui) => !favouriteCategories.includes(ui.category));
        const restUiImageCategoriesToShow = restUiImageCategories.slice(0, numberOfCategory);
        const restUiImageCategoriesSorted = Sort.orderAlphabetically(restUiImageCategoriesToShow, 'title');
        const finalUiImagesCategories = favoutiteUiImageCategories.concat(restUiImageCategoriesSorted);
        
        setUiImageCategories(finalUiImagesCategories);
    }


    return {
        uiImagesCategory,
    }
}