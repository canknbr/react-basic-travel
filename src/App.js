import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems((prevItems) => [item, ...prevItems]);
  };
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const updateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      })
    );
  };
  const handleClearList = () => {
    setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form handleItem={addItem} />
      <PackingList
        items={items}
        removeItem={removeItem}
        updateItem={updateItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;





