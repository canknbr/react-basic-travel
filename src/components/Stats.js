
const Stats = ({ items }) => {
    const itemsCount = items.length;
    const packedItemsCount = items.filter((item) => item.packed).length;
    const packedItemsPercentage = Math.round(
      (packedItemsCount / itemsCount) * 100
    );
    return (
      <footer className="stats">
        <em>
          {packedItemsPercentage === 100
            ? "🎉 Great job! You're all packed!"
            : `🧳 You have ${itemsCount} 
      items in your list, ${packedItemsCount} items packed (${packedItemsPercentage}%)
      `}
        </em>
      </footer>
    );
  };

    export default Stats;