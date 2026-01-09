import React from "react";
import Akimg from "../assets/Akimg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
    
      className="
        min-h-screen w-full flex flex-col text-black
        bg-gray-300 
        bg-[url('https://media.istockphoto.com/id/1437887123/photo/blank-screen-glass-laptop-neon-lighting-background-with-geometric-shapes.jpg?s=2048x2048&w=is&k=20&c=qX3BxR8SxasweiJpHHSdj50RbNmfp4OnjhdX4gp2SqE=')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Main Section */}
      <main id="Home" className="flex-grow flex items-center">
        <div className="mx-auto flex flex-col lg:flex-row items-center max-w-7xl gap-12 p-6">

          {/* Text Section */}
          <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight sm:mt--">
              Kanheyalal Kumawat
            </h1>

            <p className="max-w-md text-lg text-gray-700">
              “Full Stack Developer specializing in responsive web applications
              using React, Tailwind CSS, and Java.”
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
             
              <Link to="/projects"
                 className="rounded-lg bg-orange-500 px-8 py-3 font-bold shadow-lg hover:scale-105 transition"
                >
                  <span className="material-symbols-outlined text-xl"></span>
                  Projects
                </Link>

              <Link to="/resume"
                 className="rounded-lg bg-orange-500 px-8 py-3 font-bold shadow-lg hover:scale-105 transition"
                >
                  <span className="material-symbols-outlined text-xl"></span>
                  View Resume
                </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-10 justify-center lg:justify-start mt-4 text-3xl">
              <a href="#" className="hover:text-orange-500 duration-300">
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/kanheyalal-kumawat-3142a1234/"
                className="hover:text-orange-500 duration-300"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

               <a href="mailto:kumawatarun067@gmail.com"  className="hover:text-orange-400 transition" >
                 <i className="fa-solid fa-envelope"> </i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center flex-1 mt-10">
            <div
              className="
                relative top-5 
                w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] lg:w-96 lg:h-[480px]
                rounded-xl overflow-hidden
                rotate-[15deg]
                border-4 border-blue-500
                shadow-[0_0_25px_rgba(0,153,255,0.8)]
                hover:scale-105 transition duration-500
              "
            >
              <img
                src={Akimg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
