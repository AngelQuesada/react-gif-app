import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if (!inputValue || inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    }

    return ( 
        <div className='mt-5'>
            <form onSubmit={( event ) => onSubmit( event )}>
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
 
export default AddCategory;
