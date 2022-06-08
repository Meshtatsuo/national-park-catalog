import React from "react";
import { renderMatches } from "react-router";

function ActivityTag(props) {
  let tagColor;
  const { tag } = props;

  // updated tag color based on tag type
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
    tagColor = "bg-orange-300";
  } else if (
    tag === "Pet Friendly" ||
    tag === "Horseback Riding" ||
    tag === "Hunting and Trapping" ||
    tag === "Bird and Wildlife Viewing" ||
    tag === "BARK Ranger"
  ) {
    tagColor = "bg-yellow-600";
  } else if (
    tag === "Boating" ||
    tag === "Fishing" ||
    tag === "Canoeing/Kayaking" ||
    tag === "Rafting"
  ) {
    tagColor = "bg-blue-400";
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
    tagColor = "bg-blue-200";
  } else {
    tagColor = "bg-green-600";
  }

  let tagClasses =
    "flex-0 py-1 px-2 m-1 text-xs font-bold rounded-3xl " + tagColor;

  return <h4 className={tagClasses}>{tag}</h4>;
}

export default ActivityTag;
