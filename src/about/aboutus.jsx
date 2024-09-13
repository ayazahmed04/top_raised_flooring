import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Slider settings with custom arrow components
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024, // For tablets and smaller devices
      settings: {
        slidesToShow: 2, // Show 2 images on tablet
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600, // For mobile devices
      settings: {
        slidesToShow: 1, // Show 1 image on mobile
        slidesToScroll: 1,
        arrows: true, // Optional: Enable arrows on mobile
      },
    },
  ],
};

// Custom arrow components
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full flex items-center justify-center w-12 h-12 cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <span className="text-xl">&gt;</span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full flex items-center justify-center w-12 h-12 cursor-pointer shadow-lg"
      onClick={onClick}
    >
      <span className="text-xl">&lt;</span>
    </div>
  );
}

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-100 mt-12 py-16">
        <div className="container mx-auto px-4">
          {/* About Us Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
            <p className="mt-4 text-lg text-gray-600">
              We are a passionate team dedicated to delivering the best products to our customers.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <img
                src="https://www.kehuafloors.com/data/upload/20200608/5eddf8e66e76e.jpg"
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to create high-quality products that add value to our customers’ lives. We take pride in our attention to detail and commitment to excellence.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team consists of talented individuals from various fields, all working together to achieve a common goal. We value creativity, integrity, and innovation.
              </p>

              <a
                href="/login"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Factory Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Factory</h2>
            <Slider {...settings}>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb3584fe.jpg"
                  alt="Factory 1"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb38603e.jpg"
                  alt="Factory 2"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb3b3b7f.jpg"
                  alt="Factory 3"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb3ce60f.jpg"
                  alt="Factory 4"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb94a8b9.jpg"
                  alt="Factory 5"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb969039.jpg"
                  alt="Factory 6"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb258b3c.jpg"
                  alt="Factory 7"
                  className="w-full rounded-lg"
                />
              </div>
               <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb28a36d.jpg"
                  alt="Factory 8"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb258b3c.jpg"
                  alt="Factory 9"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb2d293d.jpg"
                  alt="Factory 10"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb6eb33239e.jpg"
                  alt="Factory 11"
                  className="w-full rounded-lg"
                />
              </div>
              
            </Slider>
          </div>

          {/* Certificates Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8">Certificates</h2>
            <Slider {...settings}>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb707d04d12.jpg"
                  alt="Certificate 1"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb7086108a2.jpg"
                  alt="Certificate 2"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb71e4ad3ba.jpg"
                  alt="Certificate 3"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb71ee3ae1a.jpg"
                  alt="Certificate 4"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb703fadbc6.jpg"
                  alt="Certificate 5"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb705be38e8.jpg"
                  alt="Certificate 6"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb7063d5026.jpg"
                  alt="Certificate 7"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb70701ceeb.jpg"
                  alt="Certificate 8"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://www.kehuafloors.com/data/watermark/20200525/5ecb705be38e8.jpg"
                  alt="Certificate 3"
                  className="w-full rounded-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
