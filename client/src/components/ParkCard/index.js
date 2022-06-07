import React from "react";
import { Link } from "react-router-dom";
import Jumbo from "../../assets/acadiatest.jpg";
import ActivityTag from "../ActivityTag";

function ParkCard(park) {
  const { id, name, designation, state, image, address, jr, activities } = park;
  const link = `/view/${id}`;
  return (
    <>
      <div className="max-w-sm m-5 bg-slate-100 p-1 mx-auto">
        <img className="m-auto" src={image} alt="thumbnail" />
        <div className="p-3">
          <h2 className="text-2xl m-1 font-bold">{name}</h2>
          <h3 className="m-1">{address}</h3>
          <div className="flex flex-wrap my-3" id="park-tags">
            {activities?.length ? (
              activities.map((activity) => <ActivityTag tag={activity} />)
            ) : (
              <h2>No activities provided</h2>
            )}
          </div>

          <div id="jr-ranger" className="p-2 my-2">
            <p>Junior Ranger Program: {jr}</p>
          </div>

          <div id="link-to-single">
            <Link to={link}>
              <h2 className="text-lg font-bold text-right">View Details...</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParkCard;
