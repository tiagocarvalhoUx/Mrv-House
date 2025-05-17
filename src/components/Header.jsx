import React from "react";
//imnport link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/mrv.png";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link>
          <img src={Logo} alt="logo" />
        </Link>
        {/* button */}
        <div className="flex items-center gap-6">
          <Link
            className="hover:bg-gray-100 text-gray-400 px-4 py-3 rounded-lg transition-all"
            to=""
          >
            Log in
          </Link>

          <Link
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all  "
            to=""
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
