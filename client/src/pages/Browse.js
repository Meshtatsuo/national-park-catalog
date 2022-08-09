import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingGif from "../assets/walking.gif";

import ParkCard from "../components/ParkCard";
import Pagination from "../components/Pagination";

function Browse() {
  const [parksLoaded, setLoaded] = useState(false);
  const [parks, setParks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let pageSize = 9;

  const currentParkData = useMemo(() => {
    const firstPageIndex = (currentPage -1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return parks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, parks])

  const retrieveProducts = async () => {
    if (parksLoaded === false) {
      const response = await axios.get("/api/parks");
      if (!response) {
        return false;
      }
      setParks(response.data);

    }
  };
  retrieveProducts();

  useEffect(() => {
    if (parks) {
      setLoaded(true);

    }
  }, [parks]);

  async function onChange(e) {
    switch (e.target.id) {
      case "state-dropdown":
        setParks([]);
        if (e.target.value === "All") {
          setLoaded(false);
        } else {
          const response = await axios.get(`/api/parks/${e.target.value}`);
          if (!response) {
            console.log("error fetching new results");
          } else {
            setParks(response.data);
          }
        }
        break;
      case "jr-ranger":
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="bg-neutral-200 min-h-screen ">
        <div className="w-10/12 m-auto py-20">
          <h1 className="font-bold text-4xl m-1">Browse</h1>
          
          <div id="filters" className="columns-5">
            <div id="state-select" className="p-2">
              <select
                name="States"
                id="state-dropdown"
                className="py-1 px-3 bg-white rounded text-xl"
                onChange={onChange}
              >
                <option value="All">All</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District of Columbia">
                  District Of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>

            <p className="m-1col-span-2 text-center text-xl">
              Jr. Ranger Program
            </p>
            <div id="jr-ranger" className="text-center columns-2 px-10">
              <div>
                <label htmlFor="has-jr-ranger" className="m-2">
                  Yes
                </label>
                <input type="radio" id="jr-ranger-true" name="has-jr-ranger" />
              </div>
              <div>
                <label htmlFor="has-jr-ranger" className="m-2">
                  No
                </label>
                <input type="radio" id="jr-ranger-true" name="has-jr-ranger" />
              </div>
            </div>
          </div>
          <div className="my-10 flex flex-wrap">
            {currentParkData?.length ? (
              
              currentParkData.map((park) => 
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
              )     
            ) : (
              <div className="mx-auto my-5">
                <img src={LoadingGif} alt="Walking loading" />
                <h1 className="font-bold text-2xl">Loading. . .</h1>
              </div>
            )}
          </div>
            <div className="flex">
          <Pagination
              className="pagination-bar"
              currentPage = {currentPage}
              totalCount={parks.length}
              pageSize={pageSize}
              onPageChange={page => setCurrentPage(page)}/>   
              </div>
        </div>
      </div>
    </>
  );
}

export default Browse;
