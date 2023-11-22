const { ArtistService } = require("./artist.service");

const createArtist = async (req, res) => {
   try {
      const result = await ArtistService.createArtist(req.body);

      res.status(200).json({
         status: "success",
         message: "Artist info inserted Successfully!",
         data: result,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "Failed to insert Artist info",
         error: error.message,
      });
   }
};

const getAllArtist = async (req, res) => {
   try {
      const result = await ArtistService.getAllArtist();

      res.status(200).json({
         status: "success",
         message: "Get All Artist info Successfully!",
         data: result,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "Failed to get all Artist info",
         error: error.message,
      });
   }
};

const getArtistById = async (req, res) => {
   try {
      const result = await ArtistService.getArtistById(req.params.id);

      res.status(200).json({
         status: "success",
         message: "Get Artist info by Id Successfully!",
         data: result,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "Failed to get Artist info by Id..!",
         error: error.message,
      });
   }
};

const getRestArtistsById = async (req, res) => {
   try {
     const result = await ArtistService.getRestArtistsById(req.params.id);
 
     res.status(200).json({
       status: "success",
       message: "Get rest Artist info by id Successfully!",
       data: result,
     });
   } catch (error) {
     res.status(400).json({
       status: "error",
       message: "Failed to Get rest Artist info by id..!",
       error: error.message,
     });
   }
 };

module.exports.ArtistController = {
   createArtist,
   getAllArtist,
   getArtistById,
   getRestArtistsById
};
