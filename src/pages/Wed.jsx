import React from "react";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.jpg";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.jpg";
import w9 from "../assets/w9.jpg";
import w10 from "../assets/w10.jpg";

const images = [
  { src: w1, text: "Celebrate your special day with this elegant wedding Habesha dress." },
  { src: w2, text: "A traditional dress perfect for a beautiful Ethiopian wedding ceremony." },
  { src: w3, text: "Handcrafted wedding attire showcasing cultural artistry and elegance." },
  { src: w4, text: "This dress blends tradition with modern style for your wedding day." },
  { src: w5, text: "Perfect for brides who want to honor heritage in style and grace." },
  { src: w6, text: "Elegant fabric and intricate embroidery designed for your big day." },
  { src: w7, text: "A wedding dress that tells a story of love, family, and tradition." },
  { src: w8, text: "Celebrate Ethiopian culture with this stunning wedding ensemble." },
  { src: w9, text: "Ideal for traditional ceremonies and festive wedding celebrations." },
  { src: w10, text: "Step into your wedding day with elegance and timeless beauty." },
];

const Wed = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Wedding Habesha Dresses
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          Explore our exquisite collection of wedding Habesha dresses. Each dress is handcrafted with elegance and tradition, perfect for your special day.
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

export default Wed;
