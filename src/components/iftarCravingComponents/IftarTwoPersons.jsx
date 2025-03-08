import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import TwoPersonsChoices from "./TwoPersonsChoices";
import { useTranslation } from "react-i18next";
export default function IftarTwoPersons() {
  const { t } = useTranslation("menu");
  const iftar_craving = t("iftar_craving", { returnObjects: true });
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
          <Category
            imgPath={`iftar-craving/${iftar_craving[6].img}`}
            imgAlt={iftar_craving[6].title}
            itemName={iftar_craving[6].title}
            itemDesription={iftar_craving[6].description}
            price={iftar_craving[6].price}
            cal={iftar_craving[6].calories}
          ></Category>
        </div>
        <TwoPersonsChoices></TwoPersonsChoices>
      </div>
    </div>
  );
}
