import { useState } from "react";

// Components
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const animes = ['One Punch'];

    const [categories, setCategories] = useState(animes)

    const onAddCategory = ( newCategory ) => {

        if (categories.includes( newCategory )) return;
        
        setCategories([ newCategory, ...categories ]);
    }

    return ( 
        <>
            {/* Titulo */}
            <h1>Gif Expert APP</h1>
            
            {/* Input */}
            <AddCategory 
                onNewCategory={ value => onAddCategory(value)}
            />

            {/* Listado de gifs */}
            <button onClick={onAddCategory}>Añadir</button>

                {
                    categories.map( (category) => {
                        return <GifGrid 
                            category={ category }
                            key={ category }
                        />
                    })
                }
        </>
     );
}
 
export default GifExpertApp;