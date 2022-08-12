import { useState, useEffect} from 'react';
import { getProductById } from '../../data/data'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId]);

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    );
};

export default ItemDetailContainer;