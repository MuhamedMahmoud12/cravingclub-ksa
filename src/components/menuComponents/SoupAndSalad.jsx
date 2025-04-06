/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
import SaudiRiyal from "../sharedComponents/Currency";

export default function SoupAndSalad({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const soupsData = t(`soup-salad`, { returnObjects: true });
  const soupsSlider = t(`soupAndSaladTitles`, { returnObjects: true });
  const IMG_PATH = "menu/soup&salad/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {soupsSlider.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {soupsData.map((soup_salad) => {
              return (
                <Category
                  key={soup_salad.title}
                  imgPath={`${IMG_PATH}${soup_salad.img}`}
                  imgAlt={soup_salad.title}
                  itemName={soup_salad.title}
                  itemDesription={soup_salad.description}
                  price={soup_salad.price}
                  cal={soup_salad.calories}
                >
                  {soup_salad.addOns && (
                    <>
                      <p>{soup_salad.addOns[0].option}</p>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {soup_salad.addOns[0].price}
                          <SaudiRiyal />
                        </span>
                        <span className={categoryStyle.cal}>
                          {soup_salad.addOns[0].cal}
                        </span>
                      </div>
                      <p>{soup_salad.addOns[1].option}</p>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {soup_salad.addOns[1].price}
                          <SaudiRiyal />
                        </span>
                        <span className={categoryStyle.cal}>
                          {soup_salad.addOns[1].cal}
                        </span>
                      </div>
                    </>
                  )}
                </Category>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
