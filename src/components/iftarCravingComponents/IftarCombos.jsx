import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import { useTranslation } from "react-i18next";
export default function IftarCombos() {
  const { t } = useTranslation("menu");
  const iftarCombos = t("iftar_craving", { returnObjects: true });
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
          {iftarCombos.map((item, index) => (
            <Category
              key={index}
              imgPath={`iftar-craving/${item.img}`}
              imgAlt={item.title}
              itemName={item.title}
              itemDesription={item.description}
              price={item.price}
              cal={item.calories}
            ></Category>
          ))}
        </div>
      </div>
    </div>
  );
}
