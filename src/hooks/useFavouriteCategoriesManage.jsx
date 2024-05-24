import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoriesQuery, useGetFavouriteCategoriesQuery, usePostFavouriteCategoryMutation } from '../services/placeService';
import { useState } from 'react';
import { useEffect } from 'react';
import { addCategory, removeCategory, setCategories } from '../features/favourite/favouriteCategorySlice';

export const useFavouriteCategoriesManage = () => {



    const dispatch = useDispatch();

    const { localId } = useSelector((state) => state.auth.value);
    // Estado global de redux
    const categories = useSelector((state) => state.favouriteCategories.value.categories) || [];

    const [postFavouriteCategory] = usePostFavouriteCategoryMutation();
    const { data: favouriteCategories, isLoading, error } = useGetFavouriteCategoriesQuery(localId);
    const { data: allCategoriesAviable } = useGetCategoriesQuery();

    const [showAdvice, setShowAdvice] = useState(false);
    const [adviceMessage, setAdviceMessage] = useState('');

    useEffect(() => {
        if (favouriteCategories) {
            // Actualizamos categories (redux state) ni bien se monta el componente
            dispatch(setCategories(favouriteCategories || []));
        }
    }, [favouriteCategories, dispatch]);

    const handleAddCategory = async (category) => {
        // Si la categoría ya esta seteada en el estado no la volvemos a guardar
        const isCategorySavedIt = categories.includes(category);
        // Solo permitimos guardar como máximo 3 categorías
        const canSaveCategory = Array.isArray(categories) && categories.length < 3 && !isCategorySavedIt;

        if (!canSaveCategory) {
            setAdviceMessage("Solo puedes agregar hasta 3 categorías");
            setShowAdvice(true);
            return;
        }

        if (canSaveCategory) {
            const newCategories = [...categories, category];
            // Mandamos las categoría a firebase y luego actualizamos el estado local
            await postFavouriteCategory({ categories: newCategories, localId });
            dispatch(addCategory(category));
        }
    };

    const handleRemoveCategory = async (category) => {
        if (Array.isArray(categories)) {
            const newCategories = categories.filter(cat => cat !== category);
            // Nos aseguramos que el estado local y el estado en el servidor estén sincronizados
            await postFavouriteCategory({ categories: newCategories, localId });
            dispatch(removeCategory(category));
        }
    };

    return {
        allCategoriesAviable,
        isLoading,
        error,
        adviceMessage,
        showAdvice,
        categories,

        // Methods
        handleAddCategory,
        handleRemoveCategory,
        setShowAdvice,
    }
}
