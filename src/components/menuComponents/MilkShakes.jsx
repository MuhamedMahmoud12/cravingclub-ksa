/* eslint-disable react/prop-types */
import Category from "./Category";
import SaudiRiyal from "../sharedComponents/Currency";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import styles from "../../styles/menuStyles/drinksStyles.module.css";
import { useTranslation } from "react-i18next";
export default function MilkShakes({ categoryStyle }) {
  const IMG_PATH = "menu/drinks/";
  const { t } = useTranslation("menu");
  const milkShakesTitles = t("milkShakesTitles", { returnObjects: true });
  const milkShakes = t(`milkShakes`, { returnObjects: true });
  return (
    <>
      <div className={`${categoryStyle["item-section"]}`}>
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {milkShakesTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${milkShakes[0].img}`}
              imgAlt={milkShakes[0].title}
              itemName={milkShakes[0].title}
              itemDesription={milkShakes[0].description}
            >
              {milkShakes[1].items.map((item, index) => {
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
