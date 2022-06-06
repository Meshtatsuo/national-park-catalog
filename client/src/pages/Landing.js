import React from "react";
import { Link } from "react-router-dom";

import Moose from "../assets/moose-large.jpg";

function Landing() {
  //stuff

  return (
    <>
      <div className="bg-neutral-200 min-h-screen">
        <div className="w-10/12 m-auto py-20">
          <h1 className="font-bold text-4xl">Welcome</h1>
          <div className="flex">
            <div className="flex-1">
              <p className="text-lg my-5 pr-10">
                Welcome to the National Park Catalog! This is a small hobby
                project made by{" "}
                <a
                  className="text-blue-900"
                  href="https://github.com/meshtatsuo"
                  rel="noreferrer"
                  target="_blank"
                >
                  Dominic Misasi
                </a>{" "}
                that pulls park information from a database made using{" "}
                <a
                  className="text-blue-900 "
                  href="https://www.getgrist.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Grist
                </a>
                . Search National Parks and check out information about them!
              </p>

              <Link to="/browse">
                <h2 className="text-xl font-bold text-right px-10">
                  View National Parks Now ➤
                </h2>
              </Link>
            </div>
            <div className="flex-1 px-10">
              <img src={Moose} alt="moose" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
