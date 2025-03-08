import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import FourPersonsChoices from "./FourPersonsChoices";
import { useTranslation } from "react-i18next";
export default function IftarFourPersons() {
  const { t } = useTranslation("menu");
  const iftar_craving = t("iftar_craving", { returnObjects: true });
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
          <Category
            imgPath={`iftar-craving/${iftar_craving[7].img}`}
            imgAlt={iftar_craving[7].title}
            itemName={iftar_craving[7].title}
            itemDesription={iftar_craving[7].description}
            price={iftar_craving[7].price}
            cal={iftar_craving[7].calories}
          ></Category>
        </div>
        <FourPersonsChoices></FourPersonsChoices>
      </div>
    </div>
  );
}
