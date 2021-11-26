import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputChance = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Esto previene el comportamiento de refrescar al hacer submit
        if(inputValue.trim().length>2){
            setCategories(c => [inputValue,...c ]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChance}></input>
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory