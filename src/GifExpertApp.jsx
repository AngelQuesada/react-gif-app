// React
import { useState } from "react";

// Components
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const animes = ['Cheese'];

    const [categories, setCategories] = useState(animes)

    const onAddCategory = ( newCategory ) => {

        if (categories.includes( newCategory )) return;
        
        setCategories([ newCategory, ...categories ]);
    }

    return ( 
        <div className='container'>  
            <h1> Cheese Gif App </h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ value => onAddCategory(value)}
            />

            {/* Listado de gifs */}
            {
                categories.map( (category) => {
                    return <GifGrid 
                        category={ category }
                        key={ category }
                    />
                })
            }
        </div>
     );
}
 
export default GifExpertApp;