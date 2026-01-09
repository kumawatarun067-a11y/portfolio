import React from "react";

const EducationSkills = () => {
  return (
    <section
      id="Education"
      className="
        w-full px-5 sm:px-10 py-20 
        bg-gray-300 min-h-screen 
        bg-cover bg-center 
        bg-[url('https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg')]
      "
    >
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h1 className="
          text-3xl sm:text-4xl md:text-5xl 
          font-extrabold text-orange-500
        ">
          Education & Skills
        </h1>
      </div>

      <div className="border-b w-full mt-3 mb-8"></div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ------------------ EDUCATION ------------------ */}
        <div className="text-white">

          {/* 10th */}
          <div className="mb-10">
            <div className="flex gap-3 items-start">
              <span className="text-2xl font-bold">&#9679;</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">10th - 2019</h2>
                <p className="text-gray-300 mt-2">
                  Saraswati Vidya Mandir, Sanjeet Marg, Mandsaur
                </p>
                <p className="text-gray-200">Class X - 80% (2018–2019)</p>
              </div>
            </div>
          </div>

          {/* 12th */}
          <div className="mb-10">
            <div className="flex gap-3 items-start">
              <span className="text-2xl font-bold">&#9679;</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">12th - 2021</h2>
                <p className="text-gray-300 mt-2">
                  Saraswati Vidya Mandir, Sanjeet Marg, Mandsaur
                </p>
                <p className="text-gray-200">Class XII – 79% (2020–2021)</p>
              </div>
            </div>
          </div>

          {/* B.Tech */}
          <div>
            <div className="flex gap-3 items-start">
              <span className="text-2xl font-bold">&#9679;</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Bachelor of Technology (CSE) - 2025
                </h2>
                <p className="text-gray-300 mt-2">
                  Mandsaur University, Mandsaur
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ------------------ SKILLS ------------------ */}
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-4
          "
        >
          {[
            { name: "HTML", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" },
            { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/888/888847.png" },
            { name: "JavaScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqzMbIEagKXr2akOjPLHwxHIIIDk48gxLUw&s" },
            { name: "React JS", img: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" },
            { name: "Hibernate", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu8AMybbZoJy1YJen39GEOKO23SVnlMp9mGo80UpVFpgOPoAPI_Rn2wHoiCLe2oL1lcE&usqp=CAU" },
            { name: "Spring Boot", img: "https://i0.wp.com/e4developer.com/wp-content/uploads/2018/01/spring-boot.png?resize=600,315&ssl=1" },
            { name: "MySQL", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/1200/external-mysql-an-open-source-relational-database-management-system-logo-color-tal-revivo.jpg" },
            { name: "Core Java", img: "https://img.icons8.com/?size=96&id=13679&format=png" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="
                shadow-xl rounded-xl p-6 
                flex flex-col items-center gap-4 
                bg-white/70 backdrop-blur-lg 
                transition-transform duration-500 
                hover:scale-110
              "
            >
              <img src={skill.img} alt="" className="w-12 h-12 sm:w-14 sm:h-14" />
              <h3 className="font-bold text-center text-sm sm:text-base">{skill.name}</h3>

              {/* Rating dots */}
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
