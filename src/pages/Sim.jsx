import React from "react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";
import s9 from "../assets/s9.jpg";
import s10 from "../assets/s10.jpg";
import s11 from "../assets/s11.jpg";

const images = [
  { src: s1, text: "Simple Habesha Dress and hign quality " },
  { src: s2, text: "Simple Habesha Dress " },
  { src: s3, text: "Simple Habesha Dress " },
  { src: s5, text: "Simple Habesha Dress " },
  { src: s6, text: "Simple Habesha Dress " },
  { src: s7, text: "Simple Habesha Dress " },
  { src: s8, text: "Simple Habesha Dress " },
  { src: s9, text: "Simple Habesha Dress " },
  { src: s10, text: "Simple Habesha Dress" },
  { src: s11, text: "Simple Habesha oromia Dress " },
];

const Sim = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simple Habesha Dresses
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          Explore our collection of simple Habesha dresses, perfect for any occasion. Each dress is handcrafted with care and tradition.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="w-full p-2">
              <img
                src={item.src}
                alt={item.text}
                className="w-full object-contain max-h-64 md:max-h-72 lg:max-h-80 rounded-t-lg"
              />
            </div>
            {/* Text below image */}
            <div className="w-full p-3 text-center">
              <p className="text-gray-800 text-sm sm:text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sim;
