import mongoose, { Document, Schema } from "mongoose";

export interface ICampaign extends Document {
  title: string;
  description: string;
  goal: number;
  duration: number;
  image: string;
  raised: number;
}

const CampaignSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  duration: { type: Number, required: true },
  image: { type: String, required: true },
  raised: { type: Number, default: 0 }, // Add raised field to schema
});

export default mongoose.model<ICampaign>("Campaign", CampaignSchema);
