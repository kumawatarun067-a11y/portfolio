// import React, { useState } from 'react'

// const Navbar = () => {
//   // const [isSamuOpen,setIsManuOpen]=useState(false)
//   return (
//     <div>
//         <header className="p-6 bg-gray-900 shadow-2xl fixed w-full z-10  ">
//         <div className="mx-auto flex max-w-7xl items-center justify-between">
//           <h2 className="text-4xl font-bold text-orange-500 ml-20">AK</h2>

//           <nav className="hidden md:flex items-center gap-6 text-orange-500 font-bold text-2xl cursor-pointer">
//             <a href="#Home_page" className=' hover:text-orange-600'>Home</a>
//             <a href="#About_page" className=' hover:text-orange-600'>About</a>
//             <a href="#Education" className=' hover:text-orange-600'>Educatin</a>
//             <a href="#Contect" className=' hover:text-orange-600'>Contact</a>

//           </nav>

//           <button className="md:hidden">
//             <span className="material-symbols-outlined text-3xl">menu</span>
//           </button>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/#Home" },
  { name: "About", to: "/#About_page" },
  { name: "Education", to: "/#Education" },
  { name: "Contact", to: "/#Contect" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-4 sm:p-6 bg-gray-900 shadow-2xl fixed w-full z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* LOGO */}
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 shadow-orange-600 ml-4 sm:ml-20">
          AK
        </h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-orange-500 font-bold text-xl lg:text-2xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-500 mr-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 mt-3 py-4 px-6 rounded-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-orange-500 text-lg font-bold hover:text-orange-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

 


//   router wala code
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <header className="p-6 bg-gray-900 shadow-xl fixed w-full z-10">
//         <div className="mx-auto flex max-w-7xl items-center justify-between">

//           <h2 className="text-4xl font-bold text-orange-500 ml-20">AK</h2>

//           <nav className="hidden md:flex items-center gap-6 text-orange-500 font-bold text-2xl">
//             <Link to="/" className='hover:text-orange-600'>Home</Link>
//             <Link to="/about" className='hover:text-orange-600'>About</Link>
//             <Link to="/education" className='hover:text-orange-600'>Education</Link>
//             <Link to="/contact" className='hover:text-orange-600'>Contact</Link>
//           </nav>

//           <button className="md:hidden">
//             <span className="material-symbols-outlined text-3xl">menu</span>
//           </button>

//         </div>
//       </header>
//     </div>
//   )
// }

// export default Navbar
