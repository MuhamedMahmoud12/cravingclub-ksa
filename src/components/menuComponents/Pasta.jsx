/* eslint-disable react/prop-types */
import Category from "./Category";
import AutoSlider from "../homeComponents/AutoSlider";
import SLIDER_OPTIONS from "../../data/sliderOptions";
import AutoSliderItem from "../homeComponents/AutoSliderItem";
import { useTranslation } from "react-i18next";
export default function Pasta({ categoryStyle }) {
  const { t } = useTranslation("menu");
  const pastas = t("pastas", { returnObjects: true });
  const pastasSlider = t("pastasTitles", { returnObjects: true });
  const IMG_PATH = "menu/pasta/";
  return (
    <>
      <div
        className={`${categoryStyle["appetizers-section"]} ${categoryStyle["item-section"]}`}
        id="appetizers-section"
      >
        <AutoSlider properties={SLIDER_OPTIONS[0].homeAutoSlider}>
          {pastasSlider.map((title, index) => (
            <AutoSliderItem key={index * 2} title={title} />
          ))}
        </AutoSlider>
        <div className="container">
          <div className={categoryStyle["items-container"]}>
            {pastas.map((pasta) => {
              return (
                <Category
                  key={pasta.title}
                  imgPath={`${IMG_PATH}${pasta.img}`}
                  imgAlt={pasta.title}
                  itemName={pasta.title}
                  itemDesription={pasta.description}
                  price={pasta.price}
                  cal={pasta.calories}
                ></Category>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
