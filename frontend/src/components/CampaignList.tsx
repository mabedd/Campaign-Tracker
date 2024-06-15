"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface Campaign {
  _id: string;
  title: string;
  description: string;
  goal: number;
  duration: number;
}

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/campaigns`
        );
        setCampaigns(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {campaigns.map((campaign) => (
        <div
          key={campaign._id}
          className="p-4 bg-white dark:bg-dark-foreground rounded shadow-md"
        >
          <h2 className="text-xl font-bold text-primary dark:text-dark-text">
            {campaign.title}
          </h2>
          <p className="text-gray-700 dark:text-dark-text mt-2">
            {campaign.description}
          </p>
          <p className="text-gray-500 dark:text-dark-text mt-2">
            Goal: ${campaign.goal.toLocaleString()} - Duration:{" "}
            {campaign.duration} days
          </p>
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
