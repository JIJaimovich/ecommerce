import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../service/firebase';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = ({msg}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
        setLoading(true);

        const collectionRef = !categoryId
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId));

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        });

    }, [categoryId]);

    if(loading) {
        return <h1>Cargando...</h1>
    };

    return (
        <>
            
            <h1>{`${msg} ${categoryId || ''}`}</h1> 
            {/* <h2 className='leyenda'>Todos los productos</h2>  */}
            <ItemList products={products} />

        </>
    );
};

export default ItemListContainer;