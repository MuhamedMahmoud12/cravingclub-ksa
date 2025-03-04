import menuCategories from "../../styles/menuStyles/menuCategories.module.css";
import SaudiRiyal from "../sharedComponents/Currency";
/* eslint-disable react/prop-types */
export default function Category({
  imgPath,
  imgAlt,
  itemName,
  itemDesription,
  price,
  cal,
  children,
}) {
  const IMG_PATH = "/assets/";
  return (
    <div className={menuCategories["item-grid"]}>
      <div className={menuCategories.img}>
        <div>
          <img src={`${IMG_PATH}${imgPath}`} alt={imgAlt} />
        </div>
      </div>
      <div className={menuCategories.text}>
        {itemName ? <h3>{itemName}</h3> : null}
        {itemDesription ? (
          <p className={menuCategories["mt-15"]}>{itemDesription}</p>
        ) : null}
        {price ? (
          <div className={menuCategories["price-cal"]}>
            <span className={menuCategories.price}>
              {price}
              <SaudiRiyal></SaudiRiyal>
            </span>
            <span className={menuCategories.cal}>{cal}</span>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
