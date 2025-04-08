import React from 'react';
import productData from './dummyData';

const ProductCategories = () => {
  return (
    <div className="w-[90%] max-w-7xl mx-auto py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Product Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition duration-300 hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="md:w-1/3 w-full h-48 md:h-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 w-full p-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                {product.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
