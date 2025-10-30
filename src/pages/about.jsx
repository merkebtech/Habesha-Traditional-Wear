
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 via-red-50 to-green-50 p-6 flex flex-col items-center space-y-12">
      <header className="text-center animate-fadeInDown">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-4">
          About Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Welcome! We celebrate Ethiopian culture through the beauty of Habesha
          traditional clothing (libs). Explore the elegance, artistry, and cultural
          significance of these garments.
        </p>
      </header>
      <section className="max-w-4xl text-center px-4 space-y-12 animate-fadeIn">
        
        <div className="p-6 bg-black/20 rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
          <h2 className="text-3xl font-bold text-red-600 mb-2">
            Traditional Dress
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            White cotton dresses with colorful embroidery called "tibeb" are worn
            by women and girls for holidays, cultural ceremonies, and special occasions.
          </p>
        </div>
        <div className="p-6 bg-black/10 rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
          <h2 className="text-3xl font-bold text-red-600 mb-2">
            Wedding Attire
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Colorful and elegant garments are worn during traditional Ethiopian
            weddings, showcasing rich patterns and cultural pride.
          </p>
        </div>
        <div className="p-6 bg-black/10 rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
          <h2 className="text-3xl font-bold text-red-600 mb-2">
            Men's Libs
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Traditional shawls and tunics are worn by men for holidays, ceremonies,
            and community celebrations, reflecting heritage and identity.
          </p>
        </div>
        <div className="p-6 bg-black/20 rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
          <h2 className="text-3xl font-bold text-red-600 mb-2">
            Cultural Significance
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Habesha libs symbolize pride, identity, and heritage. Both men and
            women wear intricately woven cotton garments with colorful patterns
            called tibeb. These outfits strengthen community bonds and honor
            ancestors, proudly showcasing Ethiopian culture.
          </p>
        </div>

      </section>
    </div>
  );
};

export default About;
