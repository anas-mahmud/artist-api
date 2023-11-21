const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
   id: { type: Number, required: true },
   name: { type: String, required: [true, "Please provide a name."] },
   image: { type: String, required: [true, "Please provide a email address."] },
   intro: { type: String, required: true },
   rating: { type: Number, required: true },
   reviewCount: { type: Number, required: true },
   taskComplexity: { type: String, required: true },
   price: { type: String, required: true },
   deliveryTime: { type: String, required: true },
   testimonial: {
      text: { type: String, required: true },
      author: { type: String, required: true },
   },
   about: {
      from: { type: String, required: true },
      partnerSince: { type: Number, required: true },
      averageResponseTime: { type: String, required: true },
      description: { type: String, required: true },
      services: { type: [String], required: true },
      benefits: { type: [String], required: true },
   },
});

const ArtistModel = mongoose.model("artist", artistSchema);

module.exports = ArtistModel;
