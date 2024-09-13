import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products'; // Import your product data

const ProductDetail = () => {
  // Get the product ID from the URL params
  const { id } = useParams();
  
  // Find the product that matches the ID
  const product = products.find((p) => p.id === parseInt(id));

  // Handle case where product isn't found
  if (!product) {
    return <h2 className="text-2xl text-red-600">Product not found</h2>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Link to="/products" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Go Back To Products
</span>

      </Link>

      {/* Product Detail Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        {/* Product Image with updated styling */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain rounded-md mb-6" // Ensure image fits inside the container
        />

        {/* Product Details */}
        <h2 className="text-3xl font-bold mt-4 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
