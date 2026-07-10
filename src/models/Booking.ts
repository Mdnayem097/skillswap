import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  sessionId: mongoose.Types.ObjectId;
  mentorId: mongoose.Types.ObjectId;
  learnerId: mongoose.Types.ObjectId;
  learnerName: string;
  learnerEmail: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
}

const BookingSchema: Schema<IBooking> = new Schema(
  {
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    learnerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    learnerName: {
      type: String,
      required: true,
    },
    learnerEmail: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },
  },
  { timestamps: true },
);

const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
