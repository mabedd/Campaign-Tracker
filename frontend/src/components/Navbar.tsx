import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full p-4 bg-transparent text-white z-10">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/landing" className="hover:underline">
          Landing
        </Link>
        <Link href="/campaigns" className="hover:underline">
          Campaigns
        </Link>
        <Link href="/campaigns/new" className="hover:underline">
          Create Campaign
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
