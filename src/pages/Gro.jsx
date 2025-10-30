import React from "react";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";

const images = [
  { src: g1, text: "Celebrate unity in style with this traditional Habesha set." },
  { src: g2, text: "Elegant group attire perfect for weddings and cultural events." },
  { src: g3, text: "Matching designs that reflect harmony and family pride." },
  { src: g4, text: "Classic patterns with a modern touch for group gatherings." },
  { src: g5, text: "Tradition meets elegance in every thread of this set." },
  { src: g6, text: "Coordinated outfits designed for joyful celebrations." },
  { src: g7, text: "Bring everyone together with these beautifully matched clothes." },
  { src: g8, text: "Cultural artistry showcased in every matching set." },
  { src: g9, text: "Perfect for family photos, festivals, and special occasions." },
  { src: g10, text: "Celebrate heritage with this stunning group ensemble." },
];

const Gro = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Group Matching Habesha Sets
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Discover beautifully coordinated Habesha group matching outfits designed for cultural events, 
          weddings, and family celebrations. Each piece reflects unity, elegance, and traditional artistry.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col cursor-pointer transform transition duration-500 hover:scale-105"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.text}
              className="w-full object-cover"
            />
            {/* Text fully below the image */}
            <div className="p-3 text-gray-800 text-center text-sm sm:text-base break-words">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gro;
