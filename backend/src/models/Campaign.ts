import mongoose, { Document, Schema } from "mongoose";

export interface ICampaign extends Document {
  title: string;
  description: string;
  goal: number;
  duration: number;
}

const CampaignSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  duration: { type: Number, required: true },
});

export default mongoose.model<ICampaign>("Campaign", CampaignSchema);
