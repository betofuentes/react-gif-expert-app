import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>

        {loading && <p className="animate__animated animate__backOutRight">Loading...</p>}

        <div className="card-grid">
            {
                images.map(img => 
                    <GifGridItem 
                        key={img.id}
                         {...img } // con el spread operator mandamos todo el array como una prop
                    />
                )
            }
        </div>
        </>
    )
}
