import mongoose from "mongoose";

// resrevations schema of the buyer the gig created by the author
const ReservationSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    gigId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Gigs",
    },
    gigQuantity: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    adults: {
      type: Number,
    },
    children: {
      type: Number,
    },
    infants: {
      type: Number,
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

export default mongoose.model("Reservation", ReservationSchema);
