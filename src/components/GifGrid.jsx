// Components
import { GifItem } from './GifItem';

// Hooks
import { useFetchGifs } from '../hooks/useFetchGifs';

// Others
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

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
                        return <GifItem 
                            key={image.id} 
                            url={image.url}
                            title={image.title}
                        />
                    })
                }
            </div>
        </div>
     );
}

GifGrid.propTypes = {
    category:PropTypes.string.isRequired
}
