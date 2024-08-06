

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ShoppingPage: React.FC = () => {
  
  const placeholderImageUrl = 'https://example.com/path/to/your/image.jpg';

  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.length > 0 ? (
        products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4 border rounded-lg shadow hover:bg-gray-100"
          >
            <img
              src={product.image || placeholderImageUrl} 
              alt={`Image of ${product.title}`}
              className="h-40 w-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700">{`$${product.price}`}</p>
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default ShoppingPage;




