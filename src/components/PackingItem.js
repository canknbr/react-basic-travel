const PackingItem = ({
    id,
    description,
    quantity,
    packed,
    removeItem,
    updateItem,
  }) => {
    return (
      <li>
        <input type="checkbox" value={packed} onChange={() => updateItem(id)} />
        <span style={packed ? { textDecoration: "line-through" } : {}}>
          {quantity} {description}
        </span>
        <button onClick={() => removeItem(id)}>❌</button>
      </li>
    );
  };

    export default PackingItem;