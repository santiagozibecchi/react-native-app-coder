import { Pressable, View } from 'react-native'
import React from 'react'
import { useFavouritePlace } from '../../hooks/useFavouritePlace';
import * as Icon from '../icons';

export const FavouriteIcon = ({ placeId, isTouchable = false, iconSize, customStyles }) => {

    const { isAFavouritePlace, onTouchFavourite } = useFavouritePlace(placeId);

    return (
        <>
            {isTouchable ? (
                <View style={customStyles}>
                    <Pressable onPress={onTouchFavourite}>
                        <Icon.Like size={iconSize} color={isAFavouritePlace() ? "red" : "white"} />
                    </Pressable>
                </View>
            ) : (
                <View style={customStyles}>
                        <Icon.Like size={iconSize} color={isAFavouritePlace() ? "red" : "white"} />
                </View>
            )}
        </>
    )
}
