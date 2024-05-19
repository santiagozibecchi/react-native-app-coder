import { View, Text, FlatList } from 'react-native'
import { CategoryItem } from './CategoryItem';
import { PlacesUtil } from '../../utils/utils';
import { useSelector } from 'react-redux';

export const CategoryGrid = ({ categories, title }) => {

    const { colors } = useSelector((state) => state.theme.value);

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10, // Espacio vertical entre elementos
        }}>
            {
                title && (
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "300",
                            marginBottom: 10,
                            color: colors.text,
                        }}
                    >
                        {title}
                    </Text>
                )
            }

            <FlatList
                numColumns={2}
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem category={PlacesUtil.getExtraDetailFromCategory(item)} width={140} height={140} />
                )}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center', // Centra los elementos horizontalmente
                }}
            />
        </View>
    )
}
