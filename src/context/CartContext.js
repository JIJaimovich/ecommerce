import { useState, createContext} from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd]);
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    };
                    return productUpdated;
                } else {
                    return prod;
                }
            });

            setCart(cartUpdated);
        }
    };
    
    const getQuantity = () => {
        let accu = 0;

        cart.forEach(prod => {
        accu += prod.quantity
        });

        return accu;
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    };


    const clearCart = () => {
        setCart([])
    };

  
    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id);

        return product?.quantity;
    };

    const getTotal = () => {
        let accu = 0;

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        });

        return accu;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clearCart, getProductQuantity, getQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;