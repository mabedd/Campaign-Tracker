import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import OrganizationsSection from "../components/Clients";
import RecentCampaignsSection from "../components/RecentCampaigns";
import StatsSection from "../components/Stats";
import ProcessSection from "../components/Process";
import HelpingSection from "../components/Helping";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <OrganizationsSection />
        <RecentCampaignsSection />
        <StatsSection />
        <ProcessSection />
        <HelpingSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
