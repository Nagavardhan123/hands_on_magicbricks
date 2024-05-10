const { Category } = require("@mui/icons-material");
const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    title: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    category: String,
    place: String,
    carpet_area: String,
    developers: String,
    project: String,
    floor: String,
    transaction_type: String,
    status: String,
    facing: String,
    lift: String,
    furnished: String,
});

const CardModel = mongoose.model("card_datas", CardSchema);

module.exports = CardModel;