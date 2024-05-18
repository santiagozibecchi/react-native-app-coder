import { useState } from "react";
import { useRef } from "react";

export const useLoadImagesLazy = (images) => {
    const allImagesRef = useRef(images);
    const incrementRef = useRef(4);
    const intialImagesToLoad = images.slice(0, 4)
    const [displayedImages, setDisplayedImages] = useState(intialImagesToLoad);

    const onLoadMoreImages = () => {
        incrementRef.current += 4
        setDisplayedImages(allImagesRef.current.slice(0, incrementRef.current));
    }

    return {
        displayedImages,

        // Methods
        onLoadMoreImages,
  }
}
