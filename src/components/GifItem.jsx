const GifItem = ({image:{title, url}}) => {
    return (

        <div className="card">
            <img src={ url } className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-title">{ title }</p>
            </div>
        </div>
    )
}

export default GifItem;