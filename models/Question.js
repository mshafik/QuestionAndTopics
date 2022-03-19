const mongoose = require("mongoose");
const Question = mongoose.model(
  "Question",
  new mongoose.Schema({
    title: String,
    annotations: []
  })
);
module.exports = Question;
