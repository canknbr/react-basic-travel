import React, { useState } from "react";
import PackingItem from "./PackingItem";
const PackingList = ({ items, removeItem, updateItem,handleClearList }) => {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
   if (sortBy === "input") {
      sortedItems = items;
    }
    if (sortBy === "description") {
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    if (sortBy === "packed") {
      sortedItems = [...items].sort((a, b) => a.packed - b.packed);
    }
  
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <PackingItem
              key={item.id}
              {...item}
              removeItem={removeItem}
              updateItem={updateItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">order by input</option>
            <option value="description">order by description</option>
            <option value="packed">order by packed status</option>
          </select>
          <button onClick={handleClearList}>Clear List</button>
        </div>
      </div>
    );
  };

    export default PackingList;