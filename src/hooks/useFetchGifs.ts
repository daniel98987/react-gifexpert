import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category:any)=>{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages:any= await getGifts(category);
        setImages(newImages);
        setIsLoading(false)
    
    }
    useEffect(()=>{

        getImages();
        
        },[]
    )
    return {
        images,
        isLoading
    }
}