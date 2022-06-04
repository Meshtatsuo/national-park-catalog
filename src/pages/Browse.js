import React from "react";
import { Link } from "react-router-dom";

import ParkCard from "../components/ParkCard";

function Browse() {
  //stuff

  return (
    <>
      <div className="bg-neutral-200">
        <div class="w-10/12 m-auto py-20">
          <h1 className="font-bold text-4xl m-1">Browse</h1>

          <div className="my-10 flex flex-wrap">
            <ParkCard />
            <ParkCard />
            <ParkCard />
            <ParkCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Browse;
