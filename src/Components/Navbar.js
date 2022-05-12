import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-zinc-900">
      <img
        src="https://picsum.photos/200"
        alt="logo"
        className="w-10 h-10 ml-16 rounded-full border-2 border-black"
      />
      <ul className="flex items-center justify-evenly w-1/3">
        <li>
          <Link
            to="/"
            className="text-white hover:opacity-70 transition-opacity duration-500 ease-in"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/CreateUser"
            className="text-white hover:opacity-70 transition-opacity duration-500 ease-in"
          >
            Add
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
