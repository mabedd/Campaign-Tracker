const StatsSection = () => (
  <div className="py-10 flex items-center bg-gray-50">
    <img
      src="https://via.placeholder.com/800x600"
      alt="Stats"
      className="w-1/2 object-cover"
    />
    <div className="w-1/2 text-center p-10">
      <h2 className="text-3xl font-bold mb-4 text-emerald-500">
        When people help people, change happens
      </h2>
      <div className="text-xl text-gray-700">
        <p className="mb-2">12K+ Projects Funded</p>
        <p className="mb-2">45K+ Donors</p>
        <p className="mb-2">25+ Countries</p>
      </div>
    </div>
  </div>
);

export default StatsSection;
