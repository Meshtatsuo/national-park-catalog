const { GristDocAPI } = require("grist-api");
require("dotenv").config();

const DOC_URL =
  "https://docs.getgrist.com/h5HCA7TxWyDP/US-National-Park-Service-DB";

const api = new GristDocAPI(DOC_URL, {
  apiKey: process.env.API_KEY,
});

async function getDataInRange(range) {
  const data = await api.fetchTable("All_National_Park_Sites", {
    id: range,
  });

  if (!data) {
    console.log("No data found");
    return false;
  }

  return data;
}

async function getParkById(id) {
  const data = await api.fetchTable("All_National_Park_Sites", {
    id: [id],
  });

  if (!data) {
    console.log("No data found");
    return false;
  }

  console.log(data);
}

async function getAllParks() {
  const data = await api.fetchTable("All_National_Park_Sites");

  if (!data) {
    console.log("No data found");
    return false;
  }
  return data;
}

async function getParksByState(state) {
  const data = await api.fetchTable("All_National_Park_Sites");

  if (!data) {
    console.log("No data found");
    return false;
  }

  const newData = data.filter((item) => {
    return item.State.includes(state);
  });

  console.log(newData);
}

async function getParksWithJrRanger() {
  const data = await api.fetchTable("All_National_Park_Sites", {
    Jr_Ranger_Program: ["Yes"],
  });

  if (!data) {
    console.log("No data found");
    return false;
  }

  console.log(data);
}

module.exports = {
  getDataInRange,
  getParkById,
  getAllParks,
  getParksByState,
  getParksWithJrRanger,
};
