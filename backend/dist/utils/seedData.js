"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Campaign_1 = __importDefault(require("../models/Campaign"));
dotenv_1.default.config();
const seedCampaigns = async () => {
    await mongoose_1.default.connect(process.env.MONGO_URI);
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
    await Campaign_1.default.insertMany(campaigns);
    console.log("Campaigns seeded");
    await mongoose_1.default.disconnect();
};
seedCampaigns().catch((err) => console.error(err));
