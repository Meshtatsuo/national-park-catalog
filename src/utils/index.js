const { GristDocAPI } = require("grist-api");
require("dotenv").config();

const DOC_URL =
  "https://docs.getgrist.com/h5HCA7TxWyDP/US-National-Park-Service-DB";

async function main() {
  const api = new GristDocAPI(DOC_URL, { apiKey: process.env.API_KEY });
  const data = await api.fetchTable("All_National_Park_Sites");

  if (!data) {
    console.log("No data found");
  } else {
    console.log(data[50].Park_Image);
  }
}

main();
