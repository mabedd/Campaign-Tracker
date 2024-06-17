const ProcessSection = () => (
  <div className="py-10 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6 text-emerald-500">How It Works</h2>
    <div className="flex justify-center space-x-8 text-gray-700">
      <div>
        <img
          src="https://via.placeholder.com/100"
          alt="Create Account"
          className="mx-auto mb-2"
        />
        <p>Create an Account</p>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/100"
          alt="Select Fund"
          className="mx-auto mb-2"
        />
        <p>Select a Fund</p>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/100"
          alt="Start Donating"
          className="mx-auto mb-2"
        />
        <p>Start Donating</p>
      </div>
    </div>
  </div>
);

export default ProcessSection;
