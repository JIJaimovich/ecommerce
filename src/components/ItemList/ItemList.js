
import Item from '../Item/Item';
import { memo } from 'react';


const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map(prod =>
        <Item
          key={prod.id}
          {...prod}
        />
      )
      }
    </ul>
  );
};

export default memo(ItemList);