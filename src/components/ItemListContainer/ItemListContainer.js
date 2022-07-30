import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    return(
    <section className='itemListContainer'>
        <h2>Demo de productos</h2>
        <ItemList />

    </section>
    );
};

export default ItemListContainer;