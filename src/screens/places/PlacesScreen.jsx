import { PrincipalLayout } from '../../components/layout/PrincipalLayout';
import { View } from 'react-native';
import { CategoryGrid } from '../../components/categories/CategoryGrid';
import { Title } from '../../components/ui/Title';
import { useGetCategoriesQuery } from "../../services/placeService"

export const PlacesScreen = () => {

    const { data: categories, error, isLoading } = useGetCategoriesQuery();
    // TODO: could create a loading component

    return (
        <PrincipalLayout>
            <Title text='Categorías disponibles' center />
            <View style={{ height: 10 }} />

            <CategoryGrid categories={categories} />

            <View style={{ height: 25 }} />
        </PrincipalLayout>
    )
}
