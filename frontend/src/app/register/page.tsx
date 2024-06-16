import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const { name, email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        formData
      );
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-dark-foreground rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-primary dark:text-dark-text">
        Register
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-dark-text mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-dark-foreground rounded dark:bg-dark-foreground dark:text-dark-text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-dark-text mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-dark-foreground rounded dark:bg-dark-foreground dark:text-dark-text"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-dark-text mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-dark-foreground rounded dark:bg-dark-foreground dark:text-dark-text"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded dark:bg-dark-foreground"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
