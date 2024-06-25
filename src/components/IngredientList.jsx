import { availableIngredients } from "../App";
import Ingredient from "./Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => {
        return (
          <Ingredient
            props={{
              index: index,
              ingredient: ingredient,
              action: props.addToBurger,
              request: "add",
            }}
            key={index}
          />
        );
      })}
    </ul>
  );
};

export default IngredientList;
