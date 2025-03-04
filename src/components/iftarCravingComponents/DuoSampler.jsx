import { iftar_craving } from "../../data/menuCategories";

import Category from "../menuComponents/Category";
import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
export default function DuoSampler() {
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
