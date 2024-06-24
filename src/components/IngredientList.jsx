import { availableIngredients } from "../App";

const IngredientList = (props) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => {
        return (
          <li style={{ backgroundColor: `${ingredient.color}` }} key={index}>
            {ingredient.name}
            <button
              onClick={() => props.addToBurger(ingredient)}
              style={{ color: "white" }}
            >
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
