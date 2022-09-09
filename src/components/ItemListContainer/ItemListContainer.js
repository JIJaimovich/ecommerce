//import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { Footer } from '../Footer/Footer';

const ItemListContainer = ({msg}) => {
    
    const { categoryId } = useParams();
    const getProductsFromFirestore = () => getProducts(categoryId);
    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [categoryId]);

    if(isLoading) {
        return <h1>Cargando.</h1>
    };

    if(error) {
        return <h1>Error</h1>
    };

    if(data.length === 0) {
        return categoryId ? <h1>No se encuentra el producto {categoryId}</h1> : <h1>Producto no disponible</h1>
    };

    return (
        <>
            <h1 className='leyenda'>{`${msg} ${categoryId || ''}`}</h1> 
            <ItemList products={data} />
            <Footer />
        </>
    );
};

export default ItemListContainer;