import {
  UserIcon,
  CheckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const ProcessSection = () => (
  <div className="py-10 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6 text-emerald-500">How It Works</h2>
    <div className="flex justify-center space-x-8 text-gray-700">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-2">
          <UserIcon className="h-16 w-16 text-emerald-500" />
        </div>
        <p>Create an Account</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-2">
          <CheckIcon className="h-16 w-16 text-emerald-500" />
        </div>
        <p>Select a Fund</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-24 h-24 bg-emerald-100 rounded-full mb-2">
          <CurrencyDollarIcon className="h-16 w-16 text-emerald-500" />
        </div>
        <p>Start Donating</p>
      </div>
    </div>
  </div>
);

export default ProcessSection;
