import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full border-t border-gray-700 ">
      <div className="max-w-7xl mx-auto      py-10">

        {/* TOP: Social Icons */}
        <div className="flex justify-center lg:justify-center gap-8 mb-6">
          <i className="fa-brands fa-github text-3xl hover:text-orange-400 transition cursor-pointer"></i>
          <i className="fa-brands fa-linkedin text-3xl hover:text-orange-400 transition cursor-pointer"></i>
          <a
            href="https://wa.me/917247501035"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp text-3xl text-green-400 hover:scale-110 transition"></i>
          </a>
        </div>

        {/* MIDDLE LINE */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* BOTTOM: Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm sm:text-base">
          <a
            href="mailto:kumawatarun067@gmail.com"
            className="flex items-center gap-2 hover:text-orange-400 transition"
          >
            <i className="fa-solid fa-envelope"></i>
            kumawatarun067@gmail.com
          </a>

          <a
            href="tel:+917247501035"
            className="flex items-center gap-2 hover:text-orange-400 transition"
          >
            📞 +91-7247501035
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} AK Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
