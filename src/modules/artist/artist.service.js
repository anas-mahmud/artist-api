const ArtistModel = require("./artist.model");

const createArtist = async (payload) => {
   console.log(payload);
   const result = await ArtistModel.create(payload);
   return result;
};

const getAllArtist = async () => {
   const result = await ArtistModel.find();
   return result;
};

const getArtistById = async (id) => {
   const result = await ArtistModel.findById(id);
   return result;
};

module.exports.ArtistService = {
   createArtist,
   getAllArtist,
   getArtistById
};
