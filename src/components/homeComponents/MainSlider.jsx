/* eslint-disable react/prop-types */
import mainSlider from "../../styles/HomeStyles/MainSlider.module.css";
import Slider from "react-slick";
export default function MainSlider({ children, ...props }) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={`${mainSlider["main-img-slider"]}`} {...props}>
        <Slider {...settings}>{children}</Slider>
      </div>
    </>
  );
}
