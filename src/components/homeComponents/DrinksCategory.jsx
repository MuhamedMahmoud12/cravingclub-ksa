import MenuItem from "./MenuItem";
import { useTranslation } from "react-i18next";
export default function DrinksCategory() {
  const { t } = useTranslation("home");
  const drinks = t("menuCat", { returnObjects: true });
  return (
    <>
      <MenuItem
        img="shakers.webp"
        itemName={drinks.shakers}
        forward="shakers"
      />
      <MenuItem
        img="mojitos.webp"
        itemName={drinks.mojitos}
        forward="mojitos"
      />
      <MenuItem
        img="shakes.webp"
        itemName={drinks.shakes}
        forward="milk-shakes"
      />
      <MenuItem
        img="sensation.webp"
        itemName={drinks.sensation}
        forward="sensations"
      />
      <MenuItem
        img="smoothies.webp"
        itemName={drinks.smoothies}
        forward="smoothies"
      />
      <MenuItem
        img="filling.webp"
        itemName={drinks.filling}
        forward="filling-drinks"
      />
      <MenuItem
        img="other-drinks.webp"
        itemName={drinks["other-drinks"]}
        forward="other-drinks"
      />
      <MenuItem img="coffe.webp" itemName={drinks.coffe} forward="coffe" />
    </>
  );
}
