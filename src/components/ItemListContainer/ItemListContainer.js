import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({msg}) => {
    
    const { categoryId } = useParams();
    const getProductsFromFirestore = () => getProducts(categoryId);
    const { data, error, isLoading } = useAsync(getProductsFromFirestore, [categoryId]);

    if(isLoading) {
        return <h1>Cargando...</h1>
    };

    if(error) {
        return <h1>Error</h1>
    };

    if(data.length === 0) {
        return categoryId ? <h1>No se encuentra producto en la categoría {categoryId}</h1> : <h1>Sin productos disponibles</h1>
    };

    return (
        <>
            <h1>{`${msg} ${categoryId || ''}`}</h1> 
            <ItemList products={data} />
        </>
    );
};

export default ItemListContainer;