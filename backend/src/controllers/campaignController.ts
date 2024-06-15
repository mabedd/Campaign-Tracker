import { Request, Response } from "express";
import Campaign, { ICampaign } from "../models/Campaign";

export const createCampaign = async (req: Request, res: Response) => {
  const { title, description, goal, duration } = req.body;
  try {
    const campaign = new Campaign({ title, description, goal, duration });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const getCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const updateCampaign = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, goal, duration } = req.body;
  try {
    const campaign = await Campaign.findByIdAndUpdate(
      id,
      { title, description, goal, duration },
      { new: true }
    );
    if (!campaign) return res.status(404).json({ msg: "Campaign not found" });
    res.status(200).json(campaign);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const deleteCampaign = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const campaign = await Campaign.findByIdAndDelete(id);
    if (!campaign) return res.status(404).json({ msg: "Campaign not found" });
    res.status(200).json({ msg: "Campaign deleted" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
