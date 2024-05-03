import { useNavigation } from '@react-navigation/native'
import { PLACE_COMPONENT } from './place_component';
import { PrincipalLayout } from '../../components/layout/PrincipalLayout';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Buttom';

export const PlacesScreen = () => {
    const navigation = useNavigation();

    return (
        <PrincipalLayout>
            <Title text="Lugares" />

            <Button
                text="Ir a la lista de lugares"
                onPress={() => navigation.navigate(PLACE_COMPONENT.list_category_screen)}
                style={{
                    width: 200
                }}
            />
        </PrincipalLayout>
    )
}
