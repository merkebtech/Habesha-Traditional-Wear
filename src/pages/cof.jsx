import React from "react";
import co1 from "../assets/co1.jpg";
import co2 from "../assets/co2.jpg";
import co3 from "../assets/co3.jpg";
import co4 from "../assets/co4.jpg";

const images = [
  { src: co1, text: "Celebrate Ethiopian coffee ceremonies with this elegant traditional dress." },
  { src: co2, text: "Handcrafted attire perfect for enjoying cultural coffee traditions." },
  { src: co3, text: "Showcase heritage and elegance in your coffee ceremony outfit." },
  { src: co4, text: "Experience the warmth of tradition with this stunning coffee ceremony dress." },
];

const Cof = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Coffee Ceremony Habesha Dresses
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Discover the grace and tradition of Ethiopian coffee ceremony dresses.
          Each piece is handcrafted to reflect elegance, culture, and warmth — perfect for your special occasions.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                className="w-full object-contain h-[300px] sm:h-[350px] md:h-[400px] rounded-t-lg"
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

export default Cof;
