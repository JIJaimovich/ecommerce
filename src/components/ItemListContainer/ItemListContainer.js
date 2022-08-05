import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import {productList} from '../../data/data';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState( [] );
    useEffect(() => {
        productList().then(products => {
            setProducts(products)
        })
    }, [])
    return(
    <>
        <h2>Demo de productos</h2>
        <ItemList products={products}/>

    </>
    );
};

export default ItemListContainer;