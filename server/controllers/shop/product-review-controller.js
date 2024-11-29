
const Product = require("../../models/Product");
const Order = require("../../models/Order");

const addProductReview = async (req, res) => {
  try {
    const { productId, userId, userName, reviewMessage, reviewValue } = req.body;

    const order = await Order.findOne({
      userId,
      "cartItems.productId": productId,
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "You need to purchase the product to review it.",
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    const existingReview = product.reviews.find(
      (review) => review.userId.toString() === userId
    );

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this product!",
      });
    }

    const newReview = {
      userId,
      userName,
      reviewMessage,
      reviewValue,
      date: new Date(),
    };

    product.reviews.push(newReview);

    const totalReviewsLength = product.reviews.length;
    const averageReview =
      product.reviews.reduce((sum, review) => sum + review.reviewValue, 0) /
      totalReviewsLength;

    product.averageReview = averageReview;

    await product.save();

    res.status(201).json({
      success: true,
      data: newReview,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred.",
    });
  }
};


const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId).select("reviews");
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: product.reviews,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occurred.",
    });
  }
};


module.exports = { addProductReview, getProductReviews };