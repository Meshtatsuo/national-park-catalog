import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  //stuff

  return (
    <div className="flex bg-neutral-200 border-b-2 border-neutral-400">
      <div className="flex-1 py-5 ml-10">
        <h1 className="text-xl text-black font-bold">National Park Catalog</h1>
      </div>
      <div className="flex-1 w-full">
        <ul className="w-full flex text-center">
          <Link
            to="/"
            className="flex-1 py-5 px-8 font-bold text-black hover:text-slate text-xl hover:bg-neutral-300"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/browse"
            className="flex-1 py-5 px-8 font-bold text-black hover:text-slate text-xl hover:bg-neutral-300"
          >
            <li>Browse</li>
          </Link>
          <Link
            to="/about"
            className="flex-1 py-5 px-8 font-bold text-black hover:text-slate text-xl hover:bg-neutral-300"
          >
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
