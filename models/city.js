const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;


const CitySchema = new Schema({
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  is_active: {
    type: String,
    default: true
  },
});

module.exports = mongoose.model("City", CitySchema);
