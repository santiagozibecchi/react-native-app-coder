import { placesInfo } from '../data/data';
import { useEffect, useState } from 'react';
import { PlacesUtil, Sort } from '../utils/utils';

export const fullData = placesInfo

export const useGetImagePlaces = ({numberOfCategory, placeId = null}) => {

    // const { data: allPlaces, isSuccess } = useGetAllPlacesQuery();

    const [uiImagesCategory, setUiImageCategories] = useState([]);

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
        // TODO: if (!placeId) { } (Evitar hacer peticiones al backend si no fuera extrictamente necesario!)
            generateUiImageCategories();
    }, []);

    const generateUiImageCategories = () => {
        let allImagesByCategory = groupAllImagesByCategory();
        const categories = Object.keys(allImagesByCategory);
        const uiImageCategories = categories.map((category) => {
            return {
                title: PlacesUtil.getExtraDetailFromCategory(category).title,
                images: allImagesByCategory[category],
            }
        })
        const uiImageCategoriesToShow = uiImageCategories.slice(0, numberOfCategory);
        const uiImageCategoriesSorted = Sort.orderAlphabetically(uiImageCategoriesToShow, 'title');

        setUiImageCategories(uiImageCategoriesSorted);
    }


    return {
        uiImagesCategory,
    }
}