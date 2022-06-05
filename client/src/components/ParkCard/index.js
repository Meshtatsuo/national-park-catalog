import React from "react";
import { Link } from "react-router-dom";
import Jumbo from "../../assets/acadiatest.jpg";

function ParkCard(park) {
  const { id, name, designation, state, image, address } = park;

  return (
    <>
      <div className="max-w-sm m-5 bg-slate-100 p-1">
        <img src={image} alt="image" />
        <div className="p-3">
          <h2 className="text-2xl m-1 font-bold">{name}</h2>
          <h3 className="m-1">{address}</h3>
          <div className="flex flex-wrap my-3" id="park-tags">
            <h4 className="flex-0 px-2 m-1 text-xs font-bold bg-blue-400 rounded-lg">
              Water Tag
            </h4>
            <h4 className="flex-0 px-2 m-1 text-xs font-bold bg-yellow-600 rounded-lg">
              Monument Tag
            </h4>
            <h4 className="flex-0 px-2 m-1 text-xs font-bold bg-green-600 rounded-lg">
              Forest Tag
            </h4>
            <h4 className="flex-0 px-2 m-1 text-xs font-bold bg-orange-300 rounded-lg">
              Park Tag
            </h4>
          </div>

          <div id="link-to-single">
            <Link to="/view/1">
              <h2 className="text-lg font-bold text-right">View Details...</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParkCard;
