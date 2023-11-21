const express = require("express");
const { ArtistController } = require("./artist.controller");

const router = express.Router();

// create a artist info 
router.post("/create-artist", ArtistController.createArtist);

// get all artist information
router.get("/", ArtistController.getAllArtist);

// get artist info by id
router.get("/:id", ArtistController.getArtistById);


module.exports.ArtistRoute = router;
