import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  //stuff

  return (
    <div className="flex bg-yellow-700">
      <div className="flex-1">
        <h1>National Park Catalog</h1>
      </div>
      <div className="flex-1 w-full ">
        <ul className="w-full flex text-center">
          <Link
            to="/"
            className="flex-1 py-5 px-8 font-bold text-white text-xl"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/browse"
            className="flex-1 py-5 px-8 font-bold text-white text-xl"
          >
            <li>Browse</li>
          </Link>
          <Link
            to="/about"
            className="flex-1 py-5 px-8 font-bold text-white text-xl"
          >
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
