import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";
export default function FoodCategory() {
  const { t } = useTranslation("home");
  const food = t("menuCat", { returnObjects: true });
  return (
    <>
      <MenuItem
        img="appetizers.webp"
        itemName={food.appetizers}
        forward="appetizers"
      />
      <MenuItem
        img="salad.webp"
        itemName={food.soupSalad}
        forward="soup-salad"
      />
      <MenuItem
        img="sandwiches.webp"
        itemName={food.sandwiches}
        forward="sandwiches"
      />
      <MenuItem img="burger.webp" itemName={food.burger} forward="burgers" />
      <MenuItem img="pasta.webp" itemName={food.pasta} forward="pasta" />
      <MenuItem img="pizza.webp" itemName={food.pizza} forward="pizza" />
      <MenuItem
        img="steak.webp"
        itemName={food.steakRibs}
        forward="steak-ribs"
      />
      <MenuItem img="wagyu.webp" itemName={food.wagyu} forward="wagyu" />
      <MenuItem img="seafood.webp" itemName={food.seafood} forward="seafood" />
      <MenuItem img="chicken.webp" itemName={food.chicken} forward="chicken" />
      <MenuItem
        img="kids-meal.webp"
        itemName={food.kidsMeal}
        forward="kids-meal"
      />
      <MenuItem img="dessert.webp" itemName={food.dessert} forward="dessert" />
    </>
  );
}
