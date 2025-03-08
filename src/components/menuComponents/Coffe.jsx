/* eslint-disable react/prop-types */
import Category from "./Category";
import SaudiRiyal from "../sharedComponents/Currency";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import styles from "../../styles/menuStyles/drinksStyles.module.css";
import { useTranslation } from "react-i18next";
export default function Coffe({ categoryStyle }) {
  const IMG_PATH = "menu/drinks/";
  const { t } = useTranslation("menu");
  const coffeTitles = t("coffeTitles", { returnObjects: true });
  const coldCoffe = t(`coldCoffe`, { returnObjects: true });
  const hotCoffe = t(`hotCoffe`, { returnObjects: true });
  const classico = t(`classico`, { returnObjects: true });
  return (
    <>
      <div className={`${categoryStyle["item-section"]}`}>
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {coffeTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${coldCoffe[0].img}`}
              imgAlt={coldCoffe[0].title}
              itemName={coldCoffe[0].title}
            >
              {coldCoffe[1].items.map((item, index) => {
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
          <div
            className={`${categoryStyle["items-container"]} ${styles["items-container"]}`}
          >
            <Category
              imgPath={`${IMG_PATH}${hotCoffe[0].img}`}
              imgAlt={hotCoffe[0].title}
              itemName={hotCoffe[0].title}
            >
              {hotCoffe[1].items.map((item, index) => {
                return (
                  <div key={index} className={styles["drinks-container"]}>
                    <h4>{item.itemTitle}</h4>
                    <p>{item.itemDesc}</p>
                    <div className={styles["price-cal"]}>
                      {item.largePrice && (
                        <span className={styles.price}>
                          {item.largePrice}
                          <SaudiRiyal></SaudiRiyal>
                        </span>
                      )}
                      {item.mediumPrice && (
                        <span className={styles.cal}>
                          {item.mediumPrice}
                          <SaudiRiyal></SaudiRiyal>
                        </span>
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
              imgPath={`${IMG_PATH}${classico[0].img}`}
              imgAlt={classico[0].title}
              itemName={classico[0].title}
            >
              {classico[1].items.map((item, index) => {
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
