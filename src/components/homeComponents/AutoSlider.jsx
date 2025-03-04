/* eslint-disable react/prop-types */
import autoSlider from "../../styles/HomeStyles/AutoSlider.module.css";
import Slider from "react-slick";
export default function AutoSlider({ properties, children }) {
  return (
    <div className={autoSlider["menu-select"]}>
      <Slider {...properties}>{children}</Slider>
    </div>
  );
}
