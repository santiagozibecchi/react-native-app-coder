import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { PrincipalLayout } from '../../components/layout/PrincipalLayout';
import { useSelector } from 'react-redux';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { CustomModal } from '../../components/ui/CustomModal';
import { PlacesUtil } from '../../utils/utils';
import { useContext } from 'react';
import { ErrorContext } from '../../context/ErrorContext';
import { useFavouriteCategoriesManage } from '../../hooks/useFavouriteCategoriesManage';

export const FavouriteCategoriesScreen = () => {

    const { colors } = useSelector((state) => state.theme.value);
    const { showError } = useContext(ErrorContext);

    const {
        adviceMessage,
        allCategoriesAviable,
        error,
        isLoading,
        showAdvice,
        categories,
        // Methods
        handleAddCategory,
        handleRemoveCategory,
        setShowAdvice,
    } = useFavouriteCategoriesManage();

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        showError("Hubo un error al traer las categorías...")
        return <Text>Error</Text>;
    }

    return (
        <PrincipalLayout style={{paddingBottom: 40}}>
            <View style={styles.container}>
                <Text style={[styles.title, { color: colors.text }]}>Elige hasta 3 categorías favoritas</Text>
                <FlatList
                    data={allCategoriesAviable}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.categoryItem}>
                            <Text style={[{ color: colors.text }]}>{PlacesUtil.getExtraDetailFromCategory(item).title}</Text>
                            {Array.isArray(categories) && categories.includes(item) ? (
                                <TouchableOpacity onPress={() => handleRemoveCategory(item)}>
                                    <Text style={styles.removeButton}>Quitar de favoritos</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => handleAddCategory(item)}>
                                    <Text style={[styles.addButton, { color: colors.primary }]}>Agregar a favoritos</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                    showsVerticalScrollIndicator={ false }
                />
            </View>
            {showAdvice && (
                <CustomModal
                    message={adviceMessage}
                    onClose={() => setShowAdvice(false)}
                />
            )}
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
