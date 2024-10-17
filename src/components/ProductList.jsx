import React, { Suspense, lazy } from 'react';
import './ProductList.css'; 
import Loading from '../components/Loading';
const ProductCard = lazy(() => import('./ProductCard'));

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products?.map((product) => (
        <Suspense key={product.id} fallback={<Loading />}>
          <ProductCard product={product} />
        </Suspense>
      ))}
    </div>
  );
};

export default ProductList;
