import React, { useContext } from "react";
import { HamburgerContext } from "../../context/HamburgerContext";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const Burger = () => {
  const {selectedIngredients} = useContext(HamburgerContext);
  console.log(selectedIngredients);
  return (
    <div className="wrapper">
      <div className="bread-top" />
      {selectedIngredients.map((item, index) => {
        const ingredientArr = Array(item.count).fill(
          <BurgerIngredient key={index} type={item.name} />
        );
        return ingredientArr.map((item) => item);
      })}
      <div className="bread-bottom"></div>
    </div>
  );
};

export default Burger;
