import React from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";
import c7 from "../assets/c7.jpg";
import c8 from "../assets/c8.jpg";
import c9 from "../assets/c9.jpg";
import c10 from "../assets/c10.jpg";

const images = [
  { src: c1, text: "Couples, celebrate your love by wearing matching Habesha outfits during weddings and holidays." },
  { src: c2, text: "Share the pride of your heritage together by choosing traditional clothing with colorful tibeb embroidery." },
  { src: c3, text: "Honor your cultural roots as a couple by wearing coordinated tunics and shawls." },
  { src: c4, text: "Let your outfits tell a story of unity and identity when you attend community celebrations." },
  { src: c5, text: "Couples, showcase your bond with elegant Habesha dresses and matching garments." },
  { src: c6, text: "Embrace the artistry of traditional fabrics together, and feel the connection to your ancestors." },
  { src: c7, text: "Celebrate festivals like Meskel or Timkat with matching attire that symbolizes harmony." },
  { src: c8, text: "Couples, take pride in wearing modern adaptations of Habesha clothing that honor tradition." },
  { src: c9, text: "Strengthen your relationship by sharing the experience of cultural heritage through dress." },
  { src: c10, text: "Pass on your love for Ethiopian traditions as a couple by choosing outfits that reflect both identity and style." },
];

const Cap = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Traditional Habesha Caps
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Explore the craftsmanship and beauty of Ethiopian cultural caps — each one representing
          identity, heritage, and tradition in its finest form.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center overflow-hidden rounded-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.src}
              alt={`Habesha Cap ${index + 1}`}
              className="w-full object-contain rounded-t-lg transition-transform duration-700"
            />
            {/* Text below image */}
            <div className="bg-white w-full p-3 text-center rounded-b-lg shadow-inner">
              <p className="text-gray-800 text-sm sm:text-base">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cap;
