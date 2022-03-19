const mongoose = require("mongoose");
const Annotation = mongoose.model(
  "Annotation",
  new mongoose.Schema({
    title: { type: String, index: true }
})
);
module.exports = Annotation;