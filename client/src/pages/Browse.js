import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div className="bg-neutral-200">
        <div className="w-10/12 m-auto py-20">
          <h1 className="font-bold text-4xl m-1">Browse</h1>

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
              <h1>Loading. . .</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Browse;
