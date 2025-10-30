import React from "react";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
import m8 from "../assets/m8.jpg";
import m9 from "../assets/m9.jpg";
import m10 from "../assets/m10.jpg";

const images = [
  { src: m1, text: "Men's tunic with intricate tibeb embroidery for celebrations." },
  { src: m2, text: "Elegant shawl draped over traditional Ethiopian attire." },
  { src: m3, text: "White cotton tunic paired with matching trousers for special events." },
  { src: m4, text: "Coordinated outfits for couples during weddings and holidays." },
  { src: m5, text: "Gabi shawl layered over tunics for warmth and style." },
  { src: m6, text: "Traditional collars with colorful embroidery showcasing craftsmanship." },
  { src: m7, text: "Festive attire for holidays like Meskel and Timkat." },
  { src: m8, text: "Modern adaptations of classic Habesha outfits for men." },
  { src: m9, text: "Celebratory tunics reflecting Ethiopian heritage and pride." },
  { src: m10, text: "Full ceremonial attire honoring ancestors and tradition." },
];

const Men = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fadeInDown">
          Men’s Traditional Habesha Outfits
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto animate-fadeIn">
          Explore the elegance and cultural significance of Ethiopian men's traditional attire. 
          Each outfit showcases craftsmanship, pride, and the rich heritage of Habesha culture.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fadeInUp"
          >
            <img
              src={item.src}
              alt={item.text}
              className="w-full h-[350px] sm:h-[400px] md:h-[400px] object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{item.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
