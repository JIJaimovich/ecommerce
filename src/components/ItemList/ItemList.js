
import Item from '../Item/Item';
import { memo } from 'react';
import './ItemList.css';  


const ItemList = ({ products }) => {
  return (
    <div className='listContainer'>
      {products.map(prod =>
        <Item
          key={prod.id}
          {...prod}
        />
      )
      }
    </div>
  );
};

export default memo(ItemList);