import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormField {
  label: string;
  type: string;
  name: string;
}

import styled from 'styled-components';

const formFields: FormField[] = [
  {
    label: "Name",
    type: "text",
    name: "name",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  // Add more fields as needed
];

const DynamicForm: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission with the data in formData
    // You can send the data to an API, store it in state, or perform any other action.
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div  className="nes-field"key={index}>
          <label className="name_field" >{field.label}:</label>
          <input
          className="nes-input"
            type={field.type}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
