import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "1" },
  { name: "About", href: "2" },
  { name: "Services", href: "3" },
  { name: "Contact", href: "4" },
  { name: "Contact", href: "5" },

];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed flex bg-gray-500 w-full  justify-end items-center h-14 px-6 text-white z-10">
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-2xl font-bold gap-10  mr-20">
        {navigation.map((item) => (
          <a key={item.name} href={item.href}>
            {`${item.href} and ${item.name}`}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-gray-600 p-4 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;  

