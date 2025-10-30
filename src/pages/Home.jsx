import React from "react";
import Img1 from "../assets/9.jpg";
import Img2 from "../assets/10.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.jpg";
import Img6 from "../assets/7.jpg";
import Img7 from "../assets/8.jpg";
import Img11 from "../assets/11.jpg";
import Img13 from "../assets/13.jpg";
import Img14 from "../assets/14.jpg";

// Array of objects with image + title + description
const products = [
  { img: Img1, title: "", desc: "White cotton dress with colorful tibeb embroidery." },
  { img: Img2, title: "", desc: "Perfect for traditional celebrations and weddings." },
  { img: Img3, title: "", desc: "Soft fabric with handwoven details for comfort." },
  { img: Img4, title: "", desc: "A beautiful example of Ethiopian craftsmanship." },
  { img: Img5, title: "", desc: "Bright patterns representing cultural heritage." },
  { img: Img6, title: "", desc: "Traditional attire with a modern twist." },
  { img: Img7, title: "", desc: "Lightweight and elegant for festive occasions." },
  { img: Img11, title: "", desc: "Ideal for couples matching outfits during holidays." },
  { img: Img13, title: "", desc: "Intricate embroidery showcases skilled artistry." },
  { img: Img14, title: "", desc: "Celebrate your heritage in style and elegance." },
];

const Home = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Banner Image */}
      <div className="mb-8">
        <img
          src="https://www.ethiopian.store/cdn/shop/files/women_2.png?v=1760339080&width=3840"
          alt="Ethiopian Women"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          ✨ Best Selling ✨
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Discover the elegance of traditional Ethiopian Habesha clothing. Each outfit tells a story of culture, craftsmanship, and beauty.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
