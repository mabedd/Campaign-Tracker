import mongoose from "mongoose";
import dotenv from "dotenv";
import Campaign from "../models/Campaign";

dotenv.config();

const seedCampaigns = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  const campaigns = [
    {
      title: "Campaign 1",
      description: "Description for campaign 1",
      goal: 1000,
      duration: 30,
    },
    {
      title: "Campaign 2",
      description: "Description for campaign 2",
      goal: 2000,
      duration: 60,
    },
    {
      title: "Campaign 3",
      description: "Description for campaign 3",
      goal: 3000,
      duration: 90,
    },
  ];

  await Campaign.insertMany(campaigns);
  console.log("Campaigns seeded");
  await mongoose.disconnect();
};

seedCampaigns().catch((err) => console.error(err));
