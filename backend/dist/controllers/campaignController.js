"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCampaign = exports.updateCampaign = exports.getCampaigns = exports.createCampaign = void 0;
const Campaign_1 = __importDefault(require("../models/Campaign"));
const createCampaign = async (req, res) => {
    const { title, description, goal, duration } = req.body;
    try {
        const campaign = new Campaign_1.default({ title, description, goal, duration });
        await campaign.save();
        res.status(201).json(campaign);
    }
    catch (err) {
        res.status(500).send("Server error");
    }
};
exports.createCampaign = createCampaign;
const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign_1.default.find();
        res.status(200).json(campaigns);
    }
    catch (err) {
        res.status(500).send("Server error");
    }
};
exports.getCampaigns = getCampaigns;
const updateCampaign = async (req, res) => {
    const { id } = req.params;
    const { title, description, goal, duration } = req.body;
    try {
        const campaign = await Campaign_1.default.findByIdAndUpdate(id, { title, description, goal, duration }, { new: true });
        if (!campaign)
            return res.status(404).json({ msg: "Campaign not found" });
        res.status(200).json(campaign);
    }
    catch (err) {
        res.status(500).send("Server error");
    }
};
exports.updateCampaign = updateCampaign;
const deleteCampaign = async (req, res) => {
    const { id } = req.params;
    try {
        const campaign = await Campaign_1.default.findByIdAndDelete(id);
        if (!campaign)
            return res.status(404).json({ msg: "Campaign not found" });
        res.status(200).json({ msg: "Campaign deleted" });
    }
    catch (err) {
        res.status(500).send("Server error");
    }
};
exports.deleteCampaign = deleteCampaign;
