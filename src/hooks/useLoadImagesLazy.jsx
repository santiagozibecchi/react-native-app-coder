import { useState, useRef, useCallback } from 'react';

export const useLoadImagesLazy = (images) => {
    const maxAmountOfImageToShow = 12;
    const imagesRef = useRef(images.slice(0, maxAmountOfImageToShow));

    const incrementRef = useRef(4);
    const initialImagesToLoad = imagesRef.current.slice(0, 4);
    const [displayedImages, setDisplayedImages] = useState(initialImagesToLoad);

    // useCallback: evitamos que esta función se recree cada vez que el estado de este hook cambie, ya que esta función es totalmente independiente del estado
    // es lo que pienso no estoy 100% seguro porque dentro del scope de la fn esta "setDisplayedImages".... 
    const onLoadMoreImages = useCallback(() => {
        // El uso de useRef tiene como motivo evitar renderizados no necesarios
        incrementRef.current += 4; // 12 < 10
        const allowDisplayMoreImage = displayedImages.length < maxAmountOfImageToShow;
        if (allowDisplayMoreImage) {
            setDisplayedImages(imagesRef.current.slice(0, incrementRef.current));
        }
    }, []);


    return {
        displayedImages,
        hasMoreImagesToLoad: () => {
            const hasLessThanFourImages = initialImagesToLoad.length > 4;
            if (hasLessThanFourImages) {
                return false;
            }
            const reachedMaximumImagesAllowed = !(displayedImages.length === imagesRef.current.length)
            return reachedMaximumImagesAllowed;
        },

        // Methods
        onLoadMoreImages: initialImagesToLoad.length >= 4 ? onLoadMoreImages : null
    };
};
