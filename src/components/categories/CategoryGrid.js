import { View, Text, FlatList } from 'react-native'
import { CategoryItem } from './CategoryItem';
import { colors } from '../../constants/colors';
import { Util } from '../../utils/utils';

export const CategoryGrid = ({ categories, title }) => {

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
                    <CategoryItem category={Util.expandCategoryData(item)} width={140} height={140} />
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
