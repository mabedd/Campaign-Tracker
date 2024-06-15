import { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "@shadcnui/core";

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
    <Form onSubmit={onSubmit}>
      <Form.Item label="Title">
        <Input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          required
        />
      </Form.Item>
      <Form.Item label="Description">
        <Input
          type="textarea"
          name="description"
          value={description}
          onChange={onChange}
          required
        />
      </Form.Item>
      <Form.Item label="Goal">
        <Input
          type="number"
          name="goal"
          value={goal}
          onChange={onChange}
          required
        />
      </Form.Item>
      <Form.Item label="Duration">
        <Input
          type="number"
          name="duration"
          value={duration}
          onChange={onChange}
          required
        />
      </Form.Item>
      <Button type="submit">Create Campaign</Button>
    </Form>
  );
};

export default CampaignForm;
