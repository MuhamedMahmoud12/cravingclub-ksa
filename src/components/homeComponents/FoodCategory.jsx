import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";
export default function FoodCategory() {
  const { t } = useTranslation("home");
  return (
    <>
      <MenuItem
        img="apetizers-img.png"
        itemName={t("menuCat.appetizers")}
        forward="appetizers"
      />
      <MenuItem
        img="soup&salad.png"
        itemName={t("menuCat.soupSalad")}
        forward="soup-salad"
      />
      <MenuItem
        img="sandwiches.png"
        itemName={t("menuCat.sandwiches")}
        forward="sandwiches"
      />
      <MenuItem
        img="burger.png"
        itemName={t("menuCat.burger")}
        forward="burgers"
      />
      <MenuItem img="pasta.png" itemName={t("menuCat.pasta")} forward="pasta" />
      <MenuItem img="pizza.png" itemName={t("menuCat.pizza")} forward="pizza" />
      <MenuItem
        img="steak&ribs.png"
        itemName={t("menuCat.steakRibs")}
        forward="steak-ribs"
      />
      <MenuItem img="wagyu.png" itemName={t("menuCat.wagyu")} forward="wagyu" />
      <MenuItem
        img="seafood.png"
        itemName={t("menuCat.seafood")}
        forward="seafood"
      />
      <MenuItem
        img="chicken.png"
        itemName={t("menuCat.chicken")}
        forward="chicken"
      />
      <MenuItem
        img="kids-meal.png"
        itemName={t("menuCat.kidsMeal")}
        forward="kids-meal"
      />
      <MenuItem
        img="dessert.png"
        itemName={t("menuCat.dessert")}
        forward="dessert"
      />
    </>
  );
}
