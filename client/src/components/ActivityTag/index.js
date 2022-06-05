import React from "react";
import { renderMatches } from "react-router";

function ActivityTag(props) {
  // return based on tag type
  const { tag } = props;
  if (tag === "L" || tag === "Junior Ranger") {
    console.log(tag, " found its way here");
    return;
  } else if (
    tag === "Walking Tour" ||
    tag === "Driving Tour" ||
    tag === "Hiking" ||
    tag === "Biking" ||
    tag === "Rock Climbing" ||
    tag === "Museum" ||
    tag === "Camping" ||
    tag === "Backcountry Camping" ||
    tag === "Berry Picking" ||
    tag === "Flightseeing"
  ) {
    return (
      <h4 className="flex-0 py-1 px-2 m-1 text-xs font-bold bg-orange-300 rounded-3xl">
        {tag}
      </h4>
    );
  } else if (
    tag === "Pet Friendly" ||
    tag === "Horseback Riding" ||
    tag === "Hunting and Trapping" ||
    tag === "Bird and Wildlife Viewing" ||
    tag === "BARK Ranger"
  ) {
    return (
      <h4 className="flex-0 py-1 px-2 m-1 text-xs font-bold bg-yellow-600 rounded-3xl">
        {tag}
      </h4>
    );
  } else if (
    tag === "Boating" ||
    tag === "Fishing" ||
    tag === "Canoeing/Kayaking" ||
    tag === "Rafting"
  ) {
    return (
      <h4 className="flex-0 py-1 px-2 m-1 text-xs font-bold bg-blue-400 rounded-3xl">
        {tag}
      </h4>
    );
  } else if (
    tag === "Snowmobiling" ||
    tag === "Cross-Country Skiing" ||
    tag === "Mushing" ||
    tag === "Winter Biking" ||
    tag === "Snowshoeing" ||
    tag === "Winter Camping" ||
    tag === "Ski-joring" ||
    tag === "Mountaineering"
  ) {
    return (
      <h4 className="flex-0 py-1 px-2 m-1 text-xs font-bold bg-blue-200 rounded-3xl">
        {tag}
      </h4>
    );
  } else {
    return (
      <h4 className="flex-0 py-1 px-2 m-1 text-xs font-bold bg-green-600 rounded-3xl">
        {tag}
      </h4>
    );
  }
}

export default ActivityTag;
