import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISession extends Document {
  mentorId: mongoose.Types.ObjectId;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  price: number;
  duration: number; // minutes
  imageUrl: string;
  rating: number;
  createdAt: Date;
}

const SessionSchema: Schema<ISession> = new Schema({
  mentorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  imageUrl: { type: String, default: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500" },
  rating: { type: Number, default: 5.0 },
  createdAt: { type: Date, default: Date.now },
});

const Session: Model<ISession> = mongoose.models.Session || mongoose.model<ISession>("Session", SessionSchema);
export default Session;