const Ingredient = ({ props }) => {
  const { index, ingredient, action, request } = props;
  return (
    <li key={index} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button style={{ color: "white" }} onClick={() => action(ingredient)}>
        {request ? "+" : "X"}
      </button>
    </li>
  );
};

export default Ingredient;
