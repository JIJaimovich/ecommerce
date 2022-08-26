import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import NotificationContext from '../../notification/notification';


const ItemDetail = ({ id, name, category, img, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const { addItem, getProductQuantity } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity);

        const productToAdd = {
            id, name, price, quantity
        };

        addItem(productToAdd);
        setNotification('success', `Se agregaron ${quantity} ${name}`);
    };

    const productQuantity = getProductQuantity(id);


    return (
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemDetailImg" />
            </picture>
            <section>
                <p>{category} </p>
                <p>{description} </p>
                <p>${price} </p>
            </section>
            <footer>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity} />
                    ) : (
                        <Link to='/cart'>Comprar</Link>
                    )
                }
            </footer>
        </article>

    );
};

export default ItemDetail;  