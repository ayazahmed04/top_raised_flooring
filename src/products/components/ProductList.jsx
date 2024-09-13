  import React from 'react';
  import { Link } from 'react-router-dom';
  import products from '../data/products';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

  const ProductList = () => {
    return (
      <>
      <Header />
      <div className="p-8 mt-20 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-yellow-600">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-4 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description.substring(0, 60)}...</p>
              <div className="flex justify-between items-center mt-4">
                {/* <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">Inquiry</button> */}
                <Link to={`/products/${product.id}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Product Full Detail
</span>

  </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      </>
      
    );
  };

  export default ProductList;
