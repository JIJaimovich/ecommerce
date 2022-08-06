import { Link } from 'react-router-dom';
const ItemDetail = ({ name, img, description }) => {
    return (
        <article>
            <header>
                <h1>{name}</h1>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemDetailImg"/>
            </picture>
            <section>
                <p>{description} </p> 
            </section>
            <footer>
                <Link to={`/`} className='Option'>Volver</Link>
            </footer>
        </article>
        
    )
}

export default ItemDetail