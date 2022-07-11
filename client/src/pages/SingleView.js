import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ActivityTag from "../components/ActivityTag";
import wiki from "wikipedia";

import LoadingGif from "../assets/walking.gif";
import StarRating from "../components/StarRating";

function SingleView() {
  const [park, setPark] = useState(0);
  const [parkExtract, setParkExtract] = useState("");
  const [wikiURL, setWikiURL] = useState("");
  const id = useParams().id;

  console.log(id);

  // Retrieve park info from Grist Doc
  const retrievePark = async () => {
    if (park === 0) {
      const response = await axios.get(`/api/park/${id}`);

      if (!response) {
        return false;
      }
      setPark(response.data[0]);
    }
  };

  // Retrieve wiki summary extract
  const getWikiExtract = async (park) => {
    try {
      const summary = await wiki.summary(park);
      console.log(summary);
      //Response of type @wikiSummary - contains the intro and the main image
      if (summary) {
        setParkExtract(summary.extract);
        setWikiURL(summary.content_urls.desktop.page);
      }
    } catch (error) {
      console.log(error);
      //=> Typeof wikiError
    }
  };

  useEffect(() => {
    if (park) {
      getWikiExtract(park.National_Park_Site);
    }
    if (parkExtract) {
    }
  }, [park, parkExtract]);

  retrievePark();

  return (
    <>
      {park ? (
        <div className="min-h-screen bg-neutral-200">
          <div className="flex mx-auto">
            <div className="flex-1 px-10 p-3">
              <h2 className="text-2xl my-5 font-bold text-4xl">
                {park.National_Park_Site}
              </h2>
              <h2 className="text-sm my-2">{park.Address}</h2>
              {parkExtract ? (
                <div>
                  <p>{parkExtract}</p>
                  <a
                    className="m-5 text-right"
                    href={wikiURL}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h6>Read more on Wikipedia ➤</h6>
                  </a>
                </div>
              ) : (
                <p> Loading Info . . .</p>
              )}
            </div>
            <div className="flex-1">
              <img
                className="flex-1 m-auto p-5 "
                src={park.Park_Image}
                alt="park"
              />
              <div className="flex-0 mx-auto px-25 flex-wrap">
                <div className="flex flex-wrap my-3 px-5">
                  {park.Activities.map((activity) => (
                    <ActivityTag tag={activity} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div id="review-section" className="flex"></div>
        </div>
      ) : (
        <div className="mx-auto min-h-screen bg-neutral-200 p-10">
          <img className="m-auto" src={LoadingGif} alt="Walking loading" />
          <h1 className="font-bold text-2xl text-center">Loading. . .</h1>
        </div>
      )}
    </>
  );
}

export default SingleView;
