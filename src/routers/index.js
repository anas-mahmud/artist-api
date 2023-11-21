const express = require("express");
const { ArtistRoute } = require("../modules/artist/artist.route");

const router = express.Router();

// artist routes
router.use("/artist", ArtistRoute);

module.exports = router;
