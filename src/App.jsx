import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Contect from './Components/Contect'
import About from './Components/About'
import EducationSkills from './Components/EducationSkills'
import Navbar from './Components/Navbar'
import Resume from './Pages/Resume'
import Newnav from './Components/Newnav'
import Projects from './Pages/Projects'
import ScrollToSection from './Components/ScrollToSection'



function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <ScrollToSection/>
    {/* <Newnav/> */}

    <Routes>
      <Route
      path="/"
      element={
        <>
        <Home/>
        <About/>
        <EducationSkills/>
        <Contect/>
        

        </>
      }
      />

      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>

      </Routes>
      </BrowserRouter>
    // <div>
    //   {/* <Newnav/> */}
    // </div>
  )
}

export default App

 
// router  wala code



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Components/Home'
// import Contect from './Components/Contect'
// import About from './Components/About'
// import EducationSkills from './Components/EducationSkills'
// import Navbar from './Components/Navbar'
// import Resume from "./Pages/Resume";

// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />

//         <div className="pt-24">

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/education" element={<EducationSkills />} />
//             <Route path="/contact" element={<Contect />} />
//             <Route path="/resume" element={<Resume />} />

//           </Routes>

//         </div>

//       </BrowserRouter>
//     </>
//   )
// }

// export default App



