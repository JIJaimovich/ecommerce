import { useState, useEffect} from 'react';
import { getProductById } from '../../data/data'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        });

        // getProductById(productId)
        //     .then(product => {
        //         setProduct(product)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }, [productId]);

    return (
        <div>
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;