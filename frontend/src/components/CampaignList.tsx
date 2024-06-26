"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCampaigns } from "../services/api";
import { motion } from "framer-motion";

interface Campaign {
  _id: string;
  title: string;
  description: string;
  goal: number;
  duration: number;
  raised: number; // Assuming there's a raised amount for each campaign
}

const CampaignList = () => {
  const {
    data: campaigns = [],
    isLoading,
    isError,
  } = useQuery<Campaign[], Error>({
    queryKey: ["campaigns"],
    queryFn: fetchCampaigns,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching campaigns</div>;
  }

  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <motion.div
            key={campaign._id}
            className="bg-gray-100 text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={`https://source.unsplash.com/random/800x600?sig=${campaign._id}`} // Placeholder image from Unsplash
              alt={campaign.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              <div className="mb-4">
                <p>Goal: ${campaign.goal.toLocaleString()}</p>
                <p>Duration: {campaign.duration} days</p>
              </div>
              <div className="mb-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-800 bg-gray-200">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-800">
                        {((campaign.raised / campaign.goal) * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{
                        width: `${(campaign.raised / campaign.goal) * 100}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                    ></div>
                  </div>
                </div>
              </div>
              <a
                href={`/campaigns/${campaign._id}`}
                className="inline-block px-6 py-2 bg-emerald-500 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition duration-300"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CampaignList;
