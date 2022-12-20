import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [modalIsOpen, setIsOpen] = useState(false)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
    }

    // const openModal = () => {
    //     console.log('Click abrir')
    //     setIsOpen(true)
    // }
    
    // const closeModal = () => {
    //     console.log('Click cerrar')
    //     setIsOpen(false)
    // }

    useEffect(() => {
        getImages();
        // closeModal();
        // openModal();
    }, [])

    
    
    return {
        images,
        isLoading,
        // modalIsOpen
    }

}
