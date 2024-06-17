const HelpingSection = () => (
  <div className="py-10 bg-emerald-500 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">
      Helping Today, Helping Tomorrow Charity
    </h2>
    <p className="mb-6">
      Join us in making great ideas a reality. Your little effort can help a lot
      to a community.
    </p>
    <div className="flex justify-center space-x-4">
      <a
        href="/volunteer"
        className="inline-block px-6 py-3 bg-white text-emerald-500 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Become a Volunteer
      </a>
      <a
        href="/donate"
        className="inline-block px-6 py-3 bg-white text-emerald-500 font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Donate Now
      </a>
    </div>
  </div>
);

export default HelpingSection;
