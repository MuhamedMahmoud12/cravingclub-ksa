import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import { useTranslation } from "react-i18next";
export default function Offer59() {
  const { t } = useTranslation("menu");
  const craving_lunch59 = t("craving_lunch59", { returnObjects: true });
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
          {craving_lunch59.map((item, index) => {
            return (
              <Category
                key={index}
                imgPath={`${item.imgPath}${item.img}`}
                imgAlt={item.title}
                itemName={item.title}
                itemDesription={item.description}
                cal={item.calories}
              ></Category>
            );
          })}
        </div>
      </div>
    </div>
  );
}
