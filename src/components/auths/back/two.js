const mongoose = require("mongoose");

const MagicSchema = new mongoose.Schema({
    email: String,
    password: String
   
});

const MagicModel = mongoose.model("magic_bricks", MagicSchema);

module.exports = MagicModel;