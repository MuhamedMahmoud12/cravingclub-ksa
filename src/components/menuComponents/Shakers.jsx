/* eslint-disable react/prop-types */
import Category from "./Category";
import SaudiRiyal from "../sharedComponents/Currency";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import styles from "../../styles/menuStyles/drinksStyles.module.css";
import { useTranslation } from "react-i18next";
export default function Shakers({ categoryStyle }) {
  const IMG_PATH = "menu/drinks/";
  const { t } = useTranslation("menu");
  const shakersTitles = t("shakersTitles", { returnObjects: true });
  const shakers = t(`shakers`, { returnObjects: true });
  return (
    <>
      <div className={`${categoryStyle["item-section"]}`}>
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {shakersTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${shakers[0].img}`}
              imgAlt={shakers[0].title}
              itemName={shakers[0].title}
            >
              {shakers[1].items.map((item, index) => {
                return (
                  <div key={index} className={styles["drinks-container"]}>
                    <h4>{item.itemTitle}</h4>
                    <p>{item.itemDesc}</p>
                    <div className={styles["price-cal"]}>
                      {item.regularPrice && (
                        <span className={styles.price}>
                          {item.regularPrice}
                          <SaudiRiyal></SaudiRiyal>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </Category>
          </div>
        </div>
      </div>
    </>
  );
}
