import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import Choices from "./Choices.jsx";
import { useTranslation } from "react-i18next";

export default function SharingPlatters() {
  const { t } = useTranslation("menu");
  const iftar_craving = t("iftar_craving", { returnObjects: true });

  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <Choices></Choices>
        <div className={menuCategories["items-container"]}>
          <Category
            imgPath={`iftar-craving/${iftar_craving[2].img}`}
            imgAlt={iftar_craving[2].title}
            itemName={iftar_craving[2].title}
            itemDesription={iftar_craving[2].description}
            price={iftar_craving[2].price}
            cal={iftar_craving[2].calories}
          ></Category>
          <Category
            imgPath={`iftar-craving/${iftar_craving[3].img}`}
            imgAlt={iftar_craving[3].title}
            itemName={iftar_craving[3].title}
            itemDesription={iftar_craving[3].description}
            price={iftar_craving[3].price}
            cal={iftar_craving[3].calories}
          ></Category>
          <Category
            imgPath={`iftar-craving/${iftar_craving[4].img}`}
            imgAlt={iftar_craving[4].title}
            itemName={iftar_craving[4].title}
            itemDesription={iftar_craving[4].description}
            price={iftar_craving[4].price}
            cal={iftar_craving[4].calories}
          ></Category>
          <Category
            imgPath={`iftar-craving/${iftar_craving[5].img}`}
            imgAlt={iftar_craving[5].title}
            itemName={iftar_craving[5].title}
            itemDesription={iftar_craving[5].description}
            price={iftar_craving[5].price}
            cal={iftar_craving[5].calories}
          ></Category>
        </div>
      </div>
    </div>
  );
}
