import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import './Products.css'; 
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from './Footer';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
    <Header />
    <hr />
    <div className="home">     
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
    <Footer />
    </>
  );
};

export default Products;
