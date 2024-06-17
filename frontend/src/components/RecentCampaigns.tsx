import CampaignList from "./CampaignList";

const RecentCampaignsSection = () => (
  <div className="py-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold text-center mb-6 text-emerald-500">
      Our Recent Campaigns
    </h2>
    <CampaignList />{" "}
    {/* Assuming CampaignList accepts a limit prop to display only a few campaigns */}
  </div>
);

export default RecentCampaignsSection;
