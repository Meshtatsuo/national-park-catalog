import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingGif from "../assets/walking.gif";

import ParkCard from "../components/ParkCard";

function Browse() {
  const [parks, setParks] = useState([]);
  const retrieveProducts = async () => {
    if (parks.length === 0) {
      const response = await axios.get("/api/parks");
      if (!response) {
        return false;
      }
      setParks(response.data);
    }
  };

  useEffect(() => {
    if (parks) {
      //
    }
  }, [parks]);

  retrieveProducts();

  return (
    <>
      <div className="bg-neutral-200 min-h-screen ">
        <div className="w-10/12 m-auto py-20">
          <h1 className="font-bold text-4xl m-1">Browse</h1>
          <div id="filters">
            <select
              name="States"
              id="state-dropdown"
              className="py-1 px-3 bg-white rounded text-xl"
            ></select>
          </div>
          <div className="my-10 flex flex-wrap">
            {parks?.length ? (
              parks.map((park) => (
                <ParkCard
                  id={park.id}
                  name={park.National_Park_Site}
                  designation={park.Designation}
                  state={park.State}
                  image={park.Park_Image}
                  address={park.Address}
                  jr={park.Jr_Ranger_Program}
                  activities={park.Activities}
                />
              ))
            ) : (
              <div className="mx-auto my-5">
                <img src={LoadingGif} alt="Walking loading" />
                <h1 className="font-bold text-2xl">Loading. . .</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Browse;
