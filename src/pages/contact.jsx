import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = new URLSearchParams({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxKklUcLF6kwj0foY0baeHp0gsoy-UhoXPPf_2_V-yi58vOPRzit7DBOM6hnGjRwwHmPw/exec",
        { method: "POST", body }
      );
      const data = await res.json();

      if (data.result === "success") {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div
        className="bg-black/20 rounded-2xl shadow-2xl p-10 transform transition duration-500 
                   hover:scale-105 animate-fadeIn w-full max-w-2xl h-[550px] mx-auto flex 
                   flex-col items-center justify-center"
      >
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
          Contact Us
        </h2>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-6 text-lg w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-40 w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Your Message"
            required
          />

          <button
            type="submit"
            className={`py-3 rounded-lg text-white font-semibold transition-all duration-300 w-full ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
