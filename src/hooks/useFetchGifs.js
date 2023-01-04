
import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/gifs';

/**
 * *HOOK
 * @state {Array} images
 * @state {isLoading} Boolean
 * @param {*} category 
 * @returns images and isLoading
 */
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Sets the state "images" with the new images
     * Sets the state "isLoading" to false
     */
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    } 
}