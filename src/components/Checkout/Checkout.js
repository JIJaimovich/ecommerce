import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { db } from "../../services/firebase";
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import { Footer } from "../Footer/Footer";

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false);
    const { cart, getQuantity, getTotal, clearCart } = useContext(CartContext); 
    const navigate = useNavigate();
    const totalQuantity = getQuantity();
    const total = getTotal();

    const userDefault={
        firstName:"",
        lastName:"",
        email:"",
    };
    const [user, setUser]=useState(userDefault);
    const formEvent=(e)=>{
        const{name, value} = e.target;
        setUser({...user,[name]:value});
    };
    const userData=(e)=>{
        e.preventDefault();
        setUser(userDefault)
    };
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;

    const createOrder = async () => {
        setIsLoading(true);
        try {
            const objOrder = {
                buyer: {
                    firstName,
                    lastName,
                    email,
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            };
            const ids = cart.map(prod => prod.id);    
            const productsRef = collection(db, 'products');    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));            
            const { docs } = productsAddedFromFirestore;
            const outOfStock = [];
            
            const batch = writeBatch(db);

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
                
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc});
                }
            });
    
            if(outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);
    
                console.log(`El id de su orden es: ${orderAdded.id}`);
                clearCart();
                setOrderCreated(true);
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            } else {
                console.log('Hay productos que estan fuera de stock');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    if(isLoading) {
        return <h1>Procesando su orden.</h1>
    };

    if(orderCreated) {
        return <h1>Su orden fue generada, será redirigido al inicio.</h1>
    };

    return (
        <div className="checkoutContainer">
            <h1 className="checkoutTitle">Formulario de compra</h1>
            <form className="checkOut" onSubmit={userData}>
                <div>
                    <input name="firstName" type="text" placeholder="First Name" value={user.firstName} onChange={formEvent}></input>
                </div>
                <div>
                    <input name="lastName" type="text" placeholder="Last Name" value={user.lastName} onChange={formEvent}></input>
                </div>
                <div>
                    <input name="email" type="text" placeholder="E-mail" value={user.email} onChange={formEvent}></input>
                </div>
            </form>
            <button className="order" onClick={createOrder}>Confirmar</button>
            <Footer/>
        </div>
    )
};

export default Checkout;