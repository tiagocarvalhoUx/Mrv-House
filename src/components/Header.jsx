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
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-3 rounded-lg transition-all font-bold"
            to=""
          >
            Prev
          </Link>

          <Link
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-all font-bold  "
            to=""
          >
            Next
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
