import { iftar_craving } from "../../data/menuCategories";

import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
export default function CaliforniaRock() {
  return (
    <div className={`${menuCategories["item-section"]}`}>
      <div className="container">
        <div className={menuCategories["items-container"]}>
          <Category
            imgPath={`iftar-craving/${iftar_craving[2].img}`}
            imgAlt={iftar_craving[2].title}
            itemName={iftar_craving[2].title}
            itemDesription={iftar_craving[2].description}
            price={iftar_craving[2].price}
            cal={iftar_craving[2].calories}
          ></Category>
        </div>
      </div>
    </div>
  );
}
