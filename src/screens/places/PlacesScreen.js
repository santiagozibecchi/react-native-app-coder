import { categories } from '../../data/data';
import { PrincipalLayout } from '../../components/layout/PrincipalLayout';
import { View } from 'react-native';
import { CategoryGrid } from '../../components/categories/CategoryGrid';
import { Title } from '../../components/ui/Title';


export const PlacesScreen = () => {

    return (
        <PrincipalLayout>
            <Title text='Categorías disponibles' center />
            <View style={{ height: 10 }} />

            <CategoryGrid categories={categories} />

            <View style={{ height: 25 }} />
        </PrincipalLayout>
    )
}
