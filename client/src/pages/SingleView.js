import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ActivityTag from "../components/ActivityTag";

import LoadingGif from "../assets/walking.gif";

function SingleView() {
  const [park, setPark] = useState(0);
  const id = useParams().id;
  console.log(id);
  const retrievePark = async () => {
    if (park === 0) {
      const response = await axios.get(`/api/park/${id}`);

      if (!response) {
        return false;
      }
      setPark(response.data[0]);
    }
  };

  useEffect(() => {
    if (park) {
      //
    }
  }, [park]);

  retrievePark();

  return (
    <>
      {park ? (
        <div className="min-h-screen bg-neutral-200">
          <h2 className="text-2xl p-5">{park.National_Park_Site}</h2>
          <h2 className="text-md px-5">{park.Address}</h2>
          <div className="sm:columns-1 md:columns-2 mx-auto">
            <img
              className="flex-1 m-auto p-5"
              src={park.Park_Image}
              alt="park"
            />
            <div className="flex-1 m-auto py-5 px-32">
              <h1 className="text-2xl font-bold">Activities</h1>
              {park.Activities.map((activity) => (
                <ActivityTag tag={activity} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto my-5 min-h-screen bg-neutral-200">
          <img className="m-auto" src={LoadingGif} alt="Walking loading" />
          <h1 className="font-bold text-2xl">Loading. . .</h1>
        </div>
      )}
    </>
  );
}

export default SingleView;
