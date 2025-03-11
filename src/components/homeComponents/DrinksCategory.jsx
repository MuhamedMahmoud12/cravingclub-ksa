import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";
export default function DrinksCategory() {
  const { t } = useTranslation("home");
  const drinks = t("menuCat", { returnObjects: true });
  return (
    <>
      <MenuItem img="shakers.png" itemName={drinks.shakers} forward="shakers" />
      <MenuItem
        img="mojitos.png"
        itemName={drinks.mojitos}
        forward="appetizers"
      />
      <MenuItem
        img="shakes.png"
        itemName={drinks.shakes}
        forward="milk-shakes"
      />
      <MenuItem
        img="sensation.png"
        itemName={drinks.sensation}
        forward="sensations"
      />
      <MenuItem
        img="smoothies.png"
        itemName={drinks.smoothies}
        forward="smoothies"
      />
      <MenuItem
        img="filling.png"
        itemName={drinks.filling}
        forward="filling-drinks"
      />
      <MenuItem
        img="other-drinks.png"
        itemName={drinks["other-drinks"]}
        forward="other-drinks"
      />
      <MenuItem img="coffe.webp" itemName={drinks.coffe} forward="coffe" />
    </>
  );
}
