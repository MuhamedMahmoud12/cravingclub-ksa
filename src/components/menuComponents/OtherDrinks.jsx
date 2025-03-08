/* eslint-disable react/prop-types */
import Category from "./Category";
import SaudiRiyal from "../sharedComponents/Currency";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import styles from "../../styles/menuStyles/drinksStyles.module.css";
import { useTranslation } from "react-i18next";
export default function OtherDrinks({ categoryStyle }) {
  const IMG_PATH = "menu/drinks/";
  const { t } = useTranslation("menu");
  const drinksTitles = t("drinksTitles", { returnObjects: true });
  const sodas = t(`sodas`, { returnObjects: true });
  const juice = t(`orangeJuice`, { returnObjects: true });
  const water = t(`water`, { returnObjects: true });
  return (
    <>
      <div className={`${categoryStyle["item-section"]}`}>
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {drinksTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${sodas[0].img}`}
              imgAlt={sodas[0].title}
              itemName={sodas[0].title}
            >
              {sodas[1].items.map((item, index) => {
                return (
                  <div key={index} className={styles["drinks-container"]}>
                    <h4>{item.itemTitle}</h4>
                    <div className={styles["price-cal"]}>
                      {item.nonRefill && (
                        <>
                          <span className={styles.price}>{item.nonRefill}</span>
                          <span className={styles.cal}>{item.refill}</span>
                        </>
                      )}
                    </div>
                    <div className={styles["price-cal"]}>
                      {item.refillPrice && (
                        <>
                          <span className={styles.price}>
                            {item.nonRefillPrice}
                            <SaudiRiyal></SaudiRiyal>
                          </span>
                          <span className={styles.cal}>
                            {item.refillPrice}
                            <SaudiRiyal></SaudiRiyal>
                          </span>
                        </>
                      )}
                    </div>
                    <div className={styles["price-cal"]}>
                      {item.itemPrice && (
                        <>
                          <span className={styles.cal}>
                            {item.itemPrice}
                            <SaudiRiyal></SaudiRiyal>
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </Category>
          </div>
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${juice[0].img}`}
              imgAlt={juice[0].title}
              itemName={juice[0].title}
            >
              {juice[1].items.map((item, index) => {
                return (
                  <div key={index} className={styles["drinks-container"]}>
                    <h4>{item.itemTitle}</h4>
                    <div className={styles["price-cal"]}>
                      {item.itemPrice && (
                        <>
                          <span className={styles.cal}>{item.itemPrice}</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </Category>
          </div>
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${water[0].img}`}
              imgAlt={water[0].title}
              itemName={water[0].title}
            >
              {water[1].items.map((item, index) => {
                return (
                  <div key={index} className={styles["drinks-container"]}>
                    <h4>{item.itemTitle}</h4>
                    <div className={styles["price-cal"]}>
                      {item.nonRefill && (
                        <>
                          <span className={styles.price}>{item.nonRefill}</span>
                          <span className={styles.cal}>{item.refill}</span>
                        </>
                      )}
                    </div>
                    <div className={styles["price-cal"]}>
                      {item.refillPrice && (
                        <>
                          <span className={styles.price}>
                            {item.nonRefillPrice}
                            <SaudiRiyal></SaudiRiyal>
                          </span>
                          <span className={styles.cal}>
                            {item.refillPrice}
                            <SaudiRiyal></SaudiRiyal>
                          </span>
                        </>
                      )}
                    </div>
                    <div className={styles["price-cal"]}>
                      {item.itemPrice && (
                        <>
                          <span className={styles.cal}>
                            {item.itemPrice}
                            <SaudiRiyal></SaudiRiyal>
                          </span>
                        </>
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
