import PropTypes from 'prop-types';

const GifItem = ({ title, url }) => {

    return (

        <div className="card">
            <img src={ url } className="card-img-top" alt={ title }/>
            <div className="card-body">
                <p className="card-title">{ title }</p>
            </div>
        </div>
    )
}

GifItem.propTypes = {
    title:PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifItem;
