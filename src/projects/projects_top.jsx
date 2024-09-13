import React, { useState } from 'react';
import { menu } from './projects_index'; // Import the data from the external file
import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Function to open modal with selected image
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  // Function to show the next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === menu.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to show the previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? menu.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 mt-32">
        <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image with hover effect */}
              <img
                src={item.img}
                alt={item.title}
                onClick={() => openModal(index)}
                className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <span className="text-yellow-500 bg-yellow-100 px-3 py-1 rounded-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500"
            >
              &times;
            </button>

            {/* Previous arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-2xl text-black hover:bg-opacity-75"
            >
              &#10094;
            </button>

            {/* Modal Image */}
            <img
              src={menu[selectedImageIndex].img}
              alt={menu[selectedImageIndex].title}
              className="max-w-full max-h-screen"
            />

            {/* Image Description */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg text-center">
              <p>{menu[selectedImageIndex].desc}</p>
            </div>

            {/* Next arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-2xl text-black hover:bg-opacity-75"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Projects;
