import { useEffect, useState } from 'react';
import Item from '../Item/item';
import productList from '../../data/data';

const ItemList = () => {
    const [products, setProducts] = useState( [] );
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (true) {
            resolve(productList);
          } else {
            reject(console.error('error'));
          }
        }, 2000);
      });
    
      const getProductsFromDB = async () => {
        try {
          const result = await getProducts;
          setProducts(result);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getProductsFromDB();
      }, []); 
    
      return (
        <div>
          { products.length ? (
              <>
                {
                  products.map((product) => {
                    return (
                      <Item
                        key={product.id}
                        name={product.name}
                        thumbnail={product.thumbnail}
                        price={product.price}
                        stock={product.stock}
                        id={product.id}
                      />
                    );
                  })
                }
              </>
            ) : (
              <p>Loading products...</p>
            )
          }
        </div>
      );
    };
    
    export default ItemList;