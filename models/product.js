const { Schema, model } = require("mongoose");

// declare schema for movies
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  // linkage between the products and categories (similar to SQL foreign key)
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
  },
});

// create a Modal from the schema
const Product = model("product", productSchema);

// export the modal
module.exports = Product;
