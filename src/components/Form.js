import React, { useState } from "react";
const Form = ({ handleItem }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!description) {
        alert("Please enter a description");
        return;
      }
      const newItem = { id: Date.now(), description, quantity, packed: false };
      handleItem(newItem);
    };
    return (
      <form onSubmit={handleSubmit} className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Add item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  };
    export default Form;