const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    customerName: String,
    comment: String,
    rating: { type: Number, min: 1, max: 5 },
    date: { type: Date, default: Date.now },
  },
  { _id: false } 
);

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: { type: Number, default: 0 },
    reviews: [ReviewSchema], 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
