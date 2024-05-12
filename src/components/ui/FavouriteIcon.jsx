import { Pressable, View } from 'react-native'
import React from 'react'
import { useFavouritePlace } from '../../hooks/useFavouritePlace';
import { Ionicons } from "@expo/vector-icons"

export const FavouriteIcon = ({ placeId, isTouchable = false, iconSize, customStyles }) => {

    const { isAFavouritePlace, onTouchFavourite } = useFavouritePlace(placeId);

    return (
        <>
            {isTouchable ? (
                <View style={customStyles}>
                    <Pressable onPress={onTouchFavourite}>
                        <Ionicons name="heart" size={iconSize} color={isAFavouritePlace() ? "red" : "white"} />
                    </Pressable>
                </View>
            ) : (
                <View style={customStyles}>
                        <Ionicons name="heart" size={iconSize} color={isAFavouritePlace() ? "red" : "white"} />
                </View>
            )}
        </>
    )
}
