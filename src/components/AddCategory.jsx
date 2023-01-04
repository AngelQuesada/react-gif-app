import { useState } from "react";

import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    /**
     * Set the input value to the input state of the component
     * @param {Object} target (deconstructed from event) 
     */
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    /**
     * Adds the new category throw the function @onNewCategory
     * Sets the state value (inputValue) to an empty string
     * @param {Event} event 
     * @returns 
     */
    const onSubmit = ( event ) => {
        event.preventDefault();

        if (!inputValue || inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    }

    return ( 
        <div className='mt-5'>
            <form aria-label="form" onSubmit={( event ) => onSubmit( event )}>
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue ?? ''}
                    onChange={( event ) => {onInputChange( event )}}
                    name='gifSearch'
                />

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className='btn btn-info mt-3'>Añadir</button>
                </div>
            </form>
        </div>
    );
}

AddCategory.propTypes = {
    onNewCategory:PropTypes.func.isRequired
}
