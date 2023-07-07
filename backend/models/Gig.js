import mongoose from "mongoose";

const GigSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: Array,
      // required: [true, 'PLease add the image value for the Gig']
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    distance: {
      type: String,
    },
    shortDescription: {
      type: String,
      default: "",
    },
    tags: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gigs", GigSchema);
