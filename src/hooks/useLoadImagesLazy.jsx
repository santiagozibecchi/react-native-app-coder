import { useState, useRef, useCallback } from 'react';

export const useLoadImagesLazy = (images) => {
    const allImagesRef = useRef(images);
    const incrementRef = useRef(4);
    const initialImagesToLoad = images.slice(0, 4);
    const [displayedImages, setDisplayedImages] = useState(initialImagesToLoad);

    // useCallback: evitamos que esta función se recree cada vez que el estado de este hook cambie, ya que esta función es totalmente independiente del estado
    // es lo que pienso no estoy 100% seguro porque dentro del scope de la fn esta "setDisplayedImages".... 
    const onLoadMoreImages = useCallback(() => {
        // El uso de useRef tiene como motivo evitar renderizados no necesarios
        incrementRef.current += 4;
        setDisplayedImages(allImagesRef.current.slice(0, incrementRef.current));
    }, []);

    return {
        displayedImages,
        hasMoreImagesToLoad: !(allImagesRef.current.length === displayedImages.length),
        onLoadMoreImages,
    };
};
