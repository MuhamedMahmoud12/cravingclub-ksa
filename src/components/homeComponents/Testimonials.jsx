import testimonials from "../../styles/HomeStyles/testimonials.module.css";
import TestimonialItem from "./TestimonialItem";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
export default function Testimonials() {
  const { t } = useTranslation("home");
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "20px",
    speed: 1500,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          centerPadding: "130px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className={testimonials["testimonials"]}>
      <div className="container">
        <span className="prev-title">{t("testi.testiSpan")}</span>
        <h2>{t("testi.testiTitle")}</h2>
      </div>
      <div className={testimonials["testimonials-container"]}>
        <Slider {...settings}>
          <TestimonialItem
            imgSrc={"../../assets/testimonials/testi1-en.jpeg"}
          />
          <TestimonialItem
            imgSrc={"../../assets/testimonials/testi2-en.jpeg"}
          />
          <TestimonialItem
            imgSrc={"../../assets/testimonials/testi3-en.jpeg"}
          />
          <TestimonialItem
            imgSrc={"../../assets/testimonials/testi4-en.jpeg"}
          />
        </Slider>
      </div>
    </section>
  );
}
