import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { PrincipalLayout } from '../../components/layout/PrincipalLayout';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory, setCategories } from '../../features/favourite/favouriteCategorySlice';
import { useGetCategoriesQuery, useGetFavouriteCategoriesQuery, usePostFavouriteCategoryMutation } from '../../services/placeService';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

export const FavouriteCategoriesScreen = () => {
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.auth.value);
    // Estado global de redux
    const categories = useSelector((state) => state.favouriteCategories.value.categories) || [];

    const [postFavouriteCategory] = usePostFavouriteCategoryMutation();
    const { data: favouriteCategories, isLoading, error } = useGetFavouriteCategoriesQuery(localId);
    const { data: allCategoriesAviable } = useGetCategoriesQuery();


    useEffect(() => {
        if (favouriteCategories) {
            // TODO: podría tranforma la respues para evitar esta haciendo (..)
            // Actualizamos categories (redux state) ni bien se monta el componente
            dispatch(setCategories(favouriteCategories.favouriteCategories || []));
        }
    }, [favouriteCategories, dispatch]);

    const handleAddCategory = async (category) => {
        // Si la categoría ya esta seteada en el estado no la volvemos a guardar
        const isCategorySavedIt = categories.includes(category);
        // Solo permitimos guardar como máximo 3 categorías
        const canSaveCategory = Array.isArray(categories) && categories.length < 3 && !isCategorySavedIt;
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

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        // TODO usar contextAPI
        return <Text>Error</Text>;
    }

    return (
        <PrincipalLayout>
            <View style={styles.container}>
                <Text style={styles.title}>Elige hasta 3 categorías favoritas</Text>
                <FlatList
                    data={allCategoriesAviable}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.categoryItem}>
                            <Text>{item}</Text>
                            {Array.isArray(categories) && categories.includes(item) ? (
                                <TouchableOpacity onPress={() => handleRemoveCategory(item)}>
                                    <Text style={styles.removeButton}>Quitar de favoritos</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => handleAddCategory(item)}>
                                    <Text style={styles.addButton}>Agregar a favoritos</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                />
            </View>
        </PrincipalLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    removeButton: {
        color: 'red',
    },
    addButton: {
        color: 'green',
    },
});
