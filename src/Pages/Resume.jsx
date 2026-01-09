import React from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import ResumePDF from "../assets/kanheyalal_resume.pdf";

const Resume = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 sm:px-10 py-20">

      {/* Header */}
      <div className="max-w-6xl mx-auto border-b border-orange-500 pb-6 sm:pb-8 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-orange-500">
          Kanheyalal Kumawat
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mt-2">
          Full Stack Developer | React | Java | Tailwind CSS
        </p>
      </div>

      {/* PDF View */}
      <div className="
        border border-orange-500 
        shadow-2xl 
        mx-0 sm:mx-36 
        h-[500px] sm:h-[800px]
      ">
        <iframe
          src={ResumePDF}
          className="w-full h-full"
          title="Resume PDF"
        ></iframe>
      </div>

      {/* Buttons */}
      <div className="
        flex 
        gap-4 
        mt-6 
        flex-wrap 
        justify-center sm:justify-start
        mx-0 sm:ml-36
      ">
        <a
          href={ResumePDF}
          download
          className="flex items-center gap-2 bg-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
        >
          <Download size={20} /> Download Resume
        </a>

        <Link
          to="/"
          className="flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-black transition"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      {/* Contact */}
      <div className="max-w-6xl mx-auto mt-10 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
          Contact
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-300 items-center sm:items-start">
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
      </div>

    </section>
  );
};

export default Resume;
