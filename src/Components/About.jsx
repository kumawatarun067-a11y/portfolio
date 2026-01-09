import Aboutimg from "../assets/Aboutimg.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 "
      id="About_page"
    >
      <div className="min-h-screen w-full flex flex-col">
        {/* Main Section */}
        <main className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            {/* Image Section */}
            <div className="w-full max-w-sm">
              <div className="aspect-square w-full rounded-xl overflow-hidden shadow-2xl mt-4">
                <img
                  src={Aboutimg}
                  alt="profile"
                  className="w-full h-full object-cover border rounded-2xl border-blue-600"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="text-4xl font-bold sm:text-5xl">
                Java Full Stack Developer | Fresher
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-300">
                I build responsive and user-friendly web applications using
                Java, Spring Boot, React, and modern web technologies.
              </p>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {/* <button className="flex items-center gap-2 h-12 px-5 rounded-lg border border-blue-600 text-white font-semibold hover:bg-blue-700 duration-300">
                  <span className="material-symbols-outlined text-xl">
                    View Resume
                  </span>
                </button> */}

                <Link
                  to="/resume"
                  className="flex items-center gap-2 h-12 px-5 rounded-lg border border-blue-600 text-white font-semibold hover:bg-blue-700 duration-300"
                >
                  <span className="material-symbols-outlined text-xl"></span>
                  View Resume
                </Link>

                <a href="#Contect">
                  <button className="h-12 px-5 rounded-lg border border-blue-600 text-blue-600 dark:text-white font-semibold text-xl hover:bg-blue-600 hover:text-white duration-300">
                    Contact Me
                  </button>
                </a>
              </div>
              <div className="flex gap-5 justify-center lg:justify-start mt-4 text-3xl">
                <a href="#" className="hover:text-orange-500 duration-300">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/kanheyalal-kumawat-3142a1234/" className="hover:text-orange-500 duration-300">
                <i className="fa-brands fa-linkedin"></i>
                </a>

                <a
                  href="mailto:kumawatarun067@gmail.com"
                  className="hover:text-orange-400 transition"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-12 lg:col-span-2">
              <div>
                <h2 className="text-3xl font-bold text-orange-500">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  My name is kanheyalal kumawat. I have completed my B.Tech in
                  computer science and recently completed a Java Full Stack
                  Development course. I am passionate about web development,
                  especially working with Java, Spring Boot, React, JavaScript,
                  HTML, CSS, and MySQL. During my training, I worked on multiple
                  projects where I focused on building responsive UI, clean
                  code, and real-world application experience. I always try to
                  learn new technologies and improve myself every day. My goal
                  is to become a skilled Full Stack Developer and work on
                  innovative projects that make a real impact.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold text-orange-500">
                  Experience
                </h2>
                <div className="relative mt-6 pl-6 border-l border-gray-400 dark:border-gray-600">
                  {/* 1st Experience */}
                  <div className="relative mb-8">
                    <div className="absolute -left-3 top-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-gray-100 dark:ring-gray-900"></div>
                    <p className="text-sm text-gray-500 ml-4">2024</p>
                    <h3 className="text-lg font-semibold">Internpe - Intern</h3>
                    <h3 className="text-lg font-semibold">
                      Front End Developer
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      Description: Developed a front-end product catalog for an
                      e commerce platform using HTML, CSS, and JavaScript to
                      improve user experience with a responsive and interactive
                      layout. Technologies Used: HTML, CSS, JavaScript Role:
                      Designed and implemented the entire front-end structure of
                      the product catalog using HTML, CSS,JavaScript and React
                      js .
                    </p>
                  </div>

                  {/* 2nd Experience */}
                  <div className="relative mb-8">
                    <div className="absolute -left-3 top-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-gray-100 dark:ring-gray-900"></div>
                    <p className="text-sm text-gray-500 ml-4">2024-25</p>
                    <h3 className="text-lg font-semibold">
                      Industrial Training | Vivek IT Solution, Indore
                    </h3>
                    <h3 className="text-lg font-semibold">
                      Role: Full Stack Developer Trainee
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      Completed 6-month practical training in web development.
                      <br />
                      Gained hands-on experience with HTML, CSS, JavaScript,
                      JSP, Servlet, Hibernate, Spring, and MySQL. <br />
                      Developed multiple projects including “Art Gallery” and
                      other web templates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="p-6 rounded-xl border h-100 mt-6 border-blue-600">
              <h2 className="text-xl font-bold">My Skills</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  HTML
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  CSS
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  JavaScript
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  React JS
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  Core Java
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  JSP Servlet
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  Hibernate
                </span>
                <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  Spring Boot
                </span>
              </div>

              <div className="mt-4">
                <h1 className="text-xl font-bold mt-2">Database</h1>
                <div className="flex gap-2 mt-4">
                  <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    MySQL
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-xl font-bold mt-2">Tools</h1>
                <div className="flex gap-2 mt-4">
                  <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    Eclipse
                  </span>
                  <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    VS Code
                  </span>
                  <span className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    IntelliJ IDEA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
