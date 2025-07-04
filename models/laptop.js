const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    Processor: { type: String, required: true },
    RAM: { type: String, required: true },
    Storage: { type: String, required: true },
    Condition: {
      type: String,
      enum: ["pre-owned", "refurbished"],
      required: true,
    },
    Price: { type: Number, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Laptops", laptopSchema);
// Post schema
