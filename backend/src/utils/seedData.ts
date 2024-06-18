import mongoose from "mongoose";
import dotenv from "dotenv";
import Campaign from "../models/Campaign";

dotenv.config();

const seedCampaigns = async () => {
  await mongoose.connect(process.env.MONGO_URI!);

  await Campaign.deleteMany();

  const campaigns = [
    {
      title: "Clean Water for Everyone",
      description:
        "Help provide clean and safe drinking water to communities in need.",
      goal: 10000,
      duration: 30,
      image:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      raised: 5000,
    },
    {
      title: "Education for All",
      description: "Support education for children in underdeveloped regions.",
      goal: 15000,
      duration: 45,
      image:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      raised: 7500,
    },
    {
      title: "Healthcare Access",
      description:
        "Provide essential medical supplies and healthcare services.",
      goal: 20000,
      duration: 60,
      image:
        "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      raised: 10000,
    },
  ];

  await Campaign.insertMany(campaigns);
  console.log("Campaigns seeded");
  await mongoose.disconnect();
};

seedCampaigns().catch((err) => console.error(err));
