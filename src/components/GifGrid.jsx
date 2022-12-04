// Components
import GifItem from './GifItem';

// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return ( 
        <div className='container mt-5'>
            <hr />
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className='row'>
                {
                    images.map( image => {
                        return <GifItem key={image.id} image={image}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default GifGrid;