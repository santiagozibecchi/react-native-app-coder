import { PrincipalLayout } from '../../components/layout/PrincipalLayout';
import { View } from 'react-native';
import { CategoryGrid } from '../../components/categories/CategoryGrid';
import { Title } from '../../components/ui/Title';
import { useGetCategoriesQuery } from "../../services/placeService"

import { ErrorContext } from '../../context/ErrorContext';
import { useContext, useEffect } from 'react';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

export const PlacesScreen = () => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery();
    const { showError } = useContext(ErrorContext);
    // TODO: could create a loading component


    useEffect(() => {
        // Para ver el modal negar error => !error
        if (error) {
            showError("Hubo un error al traer las categorías");
        }
    }, [error]);

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <PrincipalLayout>
            <Title text='Categorías disponibles' center />
            <View style={{ height: 10 }} />

            <CategoryGrid categories={categories} />

            <View style={{ height: 25 }} />
        </PrincipalLayout>
    )
}
