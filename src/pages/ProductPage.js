// filepath: /c:/Users/blessing/Documents/BlessingWebStore/blessing/src/pages/ProductPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'; // Correct path
import { fetchProducts } from '../redux/actions/productActions';

function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="product-page">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;