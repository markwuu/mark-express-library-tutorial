var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, max: 100 }
});

//Virtual for book's URL
GenreSchema.virtual("url").get(function() {
  return "/catalog/genre/" + this._id;
});

GenreSchema.virtual("delete").get(function() {
  return this._id;
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
