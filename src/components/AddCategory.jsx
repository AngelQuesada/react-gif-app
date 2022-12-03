import { useState } from "react";

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    }

    return ( 
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => {onInputChange(event)}}
            />

            <div class="d-grid gap-2 col-6 mx-auto">
                <button className='btn btn-info mt-3'>Añadir</button>
            </div>
        </form>
    );
}
 
export default AddCategory;
