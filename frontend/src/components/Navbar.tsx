import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full p-4 bg-transparent text-emerald-500 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/campaigns" className="hover:underline">
          Campaigns
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
      <a
        href="/campaigns"
        className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full"
      >
        Campaigns
      </a>
    </div>
  </nav>
);

export default Navbar;
