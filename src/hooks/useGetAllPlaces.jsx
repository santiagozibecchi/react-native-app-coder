import { placesInfo } from '../data/data';
import { useEffect, useState } from 'react';

export const fullData = placesInfo

export const useGetImagePlaces = (placeId = null) => {

    // const { data: allPlaces, isSuccess } = useGetAllPlacesQuery();

    const [uiImagesCategory, setUiImageCategories] = useState([]);

    const getImagenesFromCategoryPlaces = () => {
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
            generateAnArrayOfUiImageCategories();
    }, []);

    const generateAnArrayOfUiImageCategories = () => {
        let allImagesByCategory = getImagenesFromCategoryPlaces();
        const categories = Object.keys(allImagesByCategory);
        const uiImageCategories = categories.map((category) => {
            return {
                category: category,
                images: allImagesByCategory[category],
            }
        })
        setUiImageCategories(uiImageCategories);
    }


    return {
        uiImagesCategory,
    }
}