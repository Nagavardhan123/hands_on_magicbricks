const mongoose = require("mongoose");

const MagicSchema = new mongoose.Schema({
    email: String,
    password: String,
    image: String
   
});

const MagicModel = mongoose.model("users_data", MagicSchema);

module.exports = MagicModel;