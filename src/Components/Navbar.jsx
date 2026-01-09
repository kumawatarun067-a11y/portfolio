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
    <header className="fixed w-full z-50 bg-gray-900 shadow-2xl">
      <div className="p-4 sm:p-6 mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 ml-4 sm:ml-20">
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

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-xl md:hidden`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            className="mb-6 text-orange-500"
            onClick={() => setOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 text-orange-500 font-bold text-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setOpen(false)}
                className="hover:text-orange-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
