const router = require("express").Router();
const {
  getDataInRange,
  getParkById,
  getAllParks,
  getParksByState,
  getParksWithJrRanger,
} = require("../../utils/grist");

const { capitalizeFirstLetter } = require("../../utils/helpers");

router.get("/parks", async (req, res) => {
  const response = await getAllParks();

  if (!response) {
    res.status(500).json({ message: "Error fetching parks" });
  } else {
    res.send(response);
  }
});

router.get("/parks/ranger/", async (req, res) => {
  const response = await getParksWithJrRanger();

  if (!response) {
    res.status(500).json({ message: "Error filtering jr ranger" });
  } else {
    res.send(response);
  }
});

router.get("/parkrange/:start/:end", async (req, res) => {
  const start = parseInt(req.params.start);
  const end = parseInt(req.params.end);

  const range = [];
  for (i = start; i <= end; i++) {
    range.push(i);
  }
  const response = await getDataInRange(range);

  if (!response) {
    res.status(500).json({ message: "Error getting parks in range" });
  } else {
    res.send(response);
  }
});

router.get("/parks/:state", async (req, res) => {
  // helper function allows me to not need to remember to capitalize
  // first letter of state in the api call
  const state = capitalizeFirstLetter(req.params.state);

  const response = await getParksByState(state);

  if (!response) {
    res.status(500).json({ message: "Error filtering parks by state" });
  } else {
    res.send(response);
  }
});

router.get("/park/:id", async (req, res) => {
  const parkId = parseInt(req.params.id);

  const response = await getParkById(parkId);

  if (!response) {
    res.status(500).json({ message: "Could not locate park by this id!" });
  } else {
    res.send(response);
  }
});

router.post("/parks/filter", async (req, res) => {
  const { state, hasJr } = req.body;

  if (hasJr === undefined || hasJr === NULL) {
    if (state !== "") {
      const response = await getParksByState(state);
      if (!response) {
        res.status(500).json({ error: "internal server error" });
      } else {
        res.send(response);
      }
    }
  }
});

module.exports = router;
