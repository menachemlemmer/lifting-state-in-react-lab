import Ingredient from "./Ingredient";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.length === 0 ? "No ingredients selected" : ""}
      {props.stack.map((ingredient, index) => {
        return (
          <Ingredient
            key={index}
            props={{
              index: index,
              ingredient: ingredient,
              action: props.removeFromBurger,
            }}
          />
        );
      })}
    </ul>
  );
};

export default BurgerStack;
