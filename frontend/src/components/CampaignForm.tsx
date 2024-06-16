import { useState } from "react";
import axios from "axios";

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: 0,
    duration: 0,
  });

  const { title, description, goal, duration } = formData;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/campaigns`,
        formData
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-dark-text mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark-foreground dark:border-dark-foreground dark:text-dark-text"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-dark-text mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          name="description"
          value={description}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark-foreground dark:border-dark-foreground dark:text-dark-text"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-dark-text mb-2"
          htmlFor="goal"
        >
          Goal
        </label>
        <input
          type="number"
          name="goal"
          value={goal}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark-foreground dark:border-dark-foreground dark:text-dark-text"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-dark-text mb-2"
          htmlFor="duration"
        >
          Duration (days)
        </label>
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={onChange}
          required
          className="w-full p-2 border border-gray-300 rounded dark:bg-dark-foreground dark:border-dark-foreground dark:text-dark-text"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white p-2 rounded dark:bg-dark-foreground"
      >
        Create Campaign
      </button>
    </form>
  );
};

export default CampaignForm;
