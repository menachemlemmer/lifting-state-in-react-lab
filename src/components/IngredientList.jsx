const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: `${ingredient.color}` }} key={index}>
            {ingredient.name}
            <button style={{ color: "white" }}>+</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
