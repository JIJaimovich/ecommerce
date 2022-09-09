import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Footer } from '../Footer/Footer';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data();
            const productAdapted = { id: response.id, ...data};
            setProduct(productAdapted);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [productId]);
    
    if(loading) {
        return <h1>Cargando...</h1>
    };

    return (
        <div>
            {loading ? <h1>Cargando...</h1> : <ItemDetail {...product} />}
            <Footer />
        </div>
    );
};

export default ItemDetailContainer;