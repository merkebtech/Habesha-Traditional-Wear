import React from "react";
import Img20 from "../assets/20.jpg";
import Img21 from "../assets/21.jpg";
import Img22 from "../assets/22.jpg";
import Img23 from "../assets/23.jpg";
import Img24 from "../assets/24.jpg";
import Img25 from "../assets/25.jpg";
import Img26 from "../assets/26.jpg";
import Img27 from "../assets/27.jpg";
import Img28 from "../assets/28.jpg";
import Img29 from "../assets/29.jpg";

const images = [
  { src: Img20, text: "Wedding Habesha Dress" },
  { src: Img21, text: "Birthday Celebration Dress" },
  { src: Img22, text: "Cultural Festival Attire" },
  { src: Img23, text: "Engagement Ceremony Outfit" },
  { src: Img24, text: "Meskel Festival Dress" },
  { src: Img25, text: "Timkat Celebration Outfit" },
  { src: Img26, text: "Traditional Family Gathering Dress" },
  { src: Img27, text: "New Year Holiday Dress" },
  { src: Img28, text: "Graduation Ceremony Habesha Outfit" },
  { src: Img29, text: "Anniversary Celebration Dress" },
];

const Eve = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Hero Section */}
      <div className="flex items-center justify-center mb-12 px-4">
        <div className="max-w-4xl text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Event & Holiday Habesha Dresses
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
            Celebrate life’s special moments in handcrafted Habesha kemis, Habesha dresses, and Eritrean dresses.  
            From weddings to birthdays and cultural gatherings, these traditional Ethiopian clothes are designed to stand out.
          </p>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <div className="w-full">
              <img
                src={item.src}
                alt={item.text}
                className="w-full object-contain max-h-64 md:max-h-72 lg:max-h-80"
              />
            </div>

            {/* Text below image */}
            <div className="p-3 text-center">
              <p className="text-gray-800 text-sm sm:text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eve;
