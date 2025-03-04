import menuCategories from "../../styles/HomeStyles/menuCategories.module.css";
import FoodCategory from "./FoodCategory";
import DrinksCategory from "./DrinksCategory";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function MenuCategories() {
  const { t } = useTranslation("home");
  const [toggleCategories, setToggleCategories] = useState(true);
  function showFoodCat() {
    setToggleCategories(true);
  }
  function showDrinksCat() {
    setToggleCategories(false);
  }
  return (
    <div className="container">
      <span className="prev-title">{t("menuCat.menuSpan")}</span>
      <h2 className={menuCategories["title"]}>{t("menuCat.cat")}</h2>
      <ul className={menuCategories["categories-list"]}>
        <li
          onClick={showFoodCat}
          className={toggleCategories ? menuCategories["active"] : ""}
        >
          {t("menuCat.food")}
        </li>
        <li
          onClick={showDrinksCat}
          className={!toggleCategories ? menuCategories["active"] : ""}
        >
          {t("menuCat.drinks")}
        </li>
      </ul>
      <div className={`${menuCategories["category"]} `}>
        {toggleCategories && <FoodCategory />}
        {!toggleCategories && <DrinksCategory />}
      </div>
    </div>
  );
}
