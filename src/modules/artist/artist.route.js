const express = require("express");
const { ArtistController } = require("./artist.controller");

const router = express.Router();

// create a artist info 
router.post("/create-artist", ArtistController.createArtist);

// get all artist information
router.get("/", ArtistController.getAllArtist);

// get rest of artist info by id
router.get("/rest-artist/:id", ArtistController.getRestArtistsById);

// get artist info by id
router.get("/:id", ArtistController.getArtistById);

module.exports.ArtistRoute = router;
