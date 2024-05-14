const mongoose = require("mongoose");

const MagicSchema = new mongoose.Schema({
    email: String,
    password: String,
    image: String,
    role: String,
    resetPasswordToken: String, // Field to store the reset password token
    resetPasswordExpires: Date // Field to store the expiration timestamp for the tokens
   
});

const MagicModel = mongoose.model("users_data", MagicSchema);

module.exports = MagicModel;