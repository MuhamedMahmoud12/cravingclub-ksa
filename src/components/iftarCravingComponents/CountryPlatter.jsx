import { iftar_craving } from "../../data/menuCategories";

import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
export default function CountryPlatter() {
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
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
