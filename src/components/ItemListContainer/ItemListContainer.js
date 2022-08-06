import { useState, useEffect } from 'react';
import { productList, getProductsByCategory } from '../../data/data';
import { useParams } from 'react-router-dom';                           
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : productList
        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])
    return (
        <>
            <h2 className='leyenda'>Todos los productos</h2>
            <ItemList products={products} />

        </>
    );
};

export default ItemListContainer;