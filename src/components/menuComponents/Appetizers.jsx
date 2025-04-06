/* eslint-disable react/prop-types */
import SaudiRiyal from "../sharedComponents/Currency";
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Appetizers({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const IMG_PATH = "menu/appetizers/";
  const appetizersData = t("appetizers", { returnObjects: true });
  const appetizersSlider = t(`appetizersTitles`, { returnObjects: true });
  return (
    <>
      <div
        className={`${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {appetizersSlider.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {appetizersData.map((appetizer) => {
              return (
                <Category
                  key={appetizer.title}
                  imgPath={`${IMG_PATH}${appetizer.img}`}
                  imgAlt={appetizer.title}
                  itemName={appetizer.title}
                  itemDesription={appetizer.description ?? ""}
                  price={appetizer.price ?? ""}
                  cal={appetizer.calories ?? ""}
                >
                  {appetizer.ingredients && (
                    <>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[0].name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[0].description}
                      </p>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[1].name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[1].description}
                      </p>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[2].name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[2].description}
                      </p>
                      <span className={categoryStyle.cat}>
                        {appetizer.ingredients[3].name}
                      </span>
                      <p className={categoryStyle["fs-15"]}>
                        {appetizer.ingredients[3].description}
                      </p>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {appetizer.itemDetails.price}
                          <SaudiRiyal></SaudiRiyal>
                        </span>
                        <span className={categoryStyle.cal}>
                          {appetizer.itemDetails.calories}
                        </span>
                      </div>
                    </>
                  )}
                  {appetizer.addOns && (
                    <>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {appetizer.addOns[0].name}
                        </span>
                        <span className={categoryStyle.cal}>
                          {appetizer.addOns[0].price}
                          <SaudiRiyal></SaudiRiyal>
                        </span>
                      </div>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {appetizer.addOns[1].name}
                        </span>
                        <span className={categoryStyle.cal}>
                          {appetizer.addOns[1].price}
                          <SaudiRiyal></SaudiRiyal>
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
