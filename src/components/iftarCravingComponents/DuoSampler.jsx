import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import { useTranslation } from "react-i18next";
export default function DuoSampler() {
  const { t } = useTranslation("menu");
  const iftar_craving = t("iftar_craving", { returnObjects: true });
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
          <Category
            imgPath={`iftar-craving/${iftar_craving[1].img}`}
            imgAlt={iftar_craving[1].title}
            itemName={iftar_craving[1].title}
            itemDesription={iftar_craving[1].description}
            price={iftar_craving[1].price}
            cal={iftar_craving[1].calories}
          ></Category>
        </div>
      </div>
    </div>
  );
}
