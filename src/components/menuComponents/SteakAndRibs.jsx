/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";

import { useTranslation } from "react-i18next";
export default function SteakAndRibs({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const steaks_and_ribs = t("steaks_and_ribs", { returnObjects: true });
  const steakAndRibsTitles = t("steakAndRibsTitles", { returnObjects: true });
  const IMG_PATH = "menu/steak&ribs/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {steakAndRibsTitles.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {steaks_and_ribs.map((steak_and_rib) => {
              return (
                <Category
                  key={steak_and_rib.title}
                  imgPath={`${IMG_PATH}${steak_and_rib.img}`}
                  imgAlt={steak_and_rib.title}
                  itemName={steak_and_rib.title}
                  itemDesription={steak_and_rib.description}
                  price={steak_and_rib.price}
                  cal={steak_and_rib.calories}
                >
                  {/* {steak_and_rib.descriptionArray && (
                      <>
                        <p className={categoryStyle["mt-15"]}>
                          {steak_and_rib.descriptionArray[0] ?? ""}
                        </p>
                        <p className={categoryStyle["mt-15"]}>
                          {steak_and_rib.descriptionArray[1] ?? ""}
                        </p>
                        <div className={categoryStyle["price-cal"]}>
                          <span className={categoryStyle.price}>
                            {steak_and_rib.price_cal[0] ?? ""}
                          </span>
                          <span className={categoryStyle.cal}>
                            {steak_and_rib.price_cal[1] ?? ""}
                          </span>
                        </div>
                      </>
                    )} */}
                  {steak_and_rib.portions_price_cal && (
                    <>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {steak_and_rib.portions_price_cal[0] ?? ""}
                        </span>
                        <span className={categoryStyle.cal}>
                          {steak_and_rib.portions_price_cal[1] ?? ""}
                        </span>
                      </div>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {steak_and_rib.portions_price_cal[2] ?? ""}
                        </span>
                        <span className={categoryStyle.cal}>
                          {steak_and_rib.portions_price_cal[3] ?? ""}
                        </span>
                      </div>
                      <div className={categoryStyle["price-cal"]}>
                        <span className={categoryStyle.price}>
                          {steak_and_rib.portions_price_cal[4] ?? ""}
                        </span>
                        <span className={categoryStyle.cal}>
                          {steak_and_rib.portions_price_cal[5] ?? ""}
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
