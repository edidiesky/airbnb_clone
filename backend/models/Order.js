import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    image: {
      type: Array,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    paidAt: {
      type: Date,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Not Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
