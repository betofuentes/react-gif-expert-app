import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch man']);

    // const handleAdd = ( ) => {
    //     // setCategorias nos permite modificar el estado de categorias
    //     // el spread operator(...) nos permite traer todos los elementos de la lista categorias más los nuevos elementos que se quieran agregar
    //     setCategories(c => [...c,'My hero academia'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {/* el metodo map nos sirve para crear un nuevo arreglo ejecutando una función para cada uno de los elementos del arreglo al que se le aplicó el .map */}
                    {categories.map( category => {
                        // se establece el valor de key por que el metodo map es lo que retorna
                        // return <li key={ category }> { category } </li>
                        return <GifGrid key={category} category={category}/>
                    } )
                }
            </ol>
        </>
    )
}


export default GifExpertApp