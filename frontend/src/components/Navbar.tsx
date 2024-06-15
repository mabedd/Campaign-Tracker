import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => (
  <nav className="bg-primary p-4 dark:bg-dark-foreground">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" className="text-white dark:text-dark-text">
          Home
        </Link>
        <Link href="/campaigns" className="text-white dark:text-dark-text">
          Campaigns
        </Link>
        <Link href="/campaigns/new" className="text-white dark:text-dark-text">
          Create Campaign
        </Link>
      </div>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
