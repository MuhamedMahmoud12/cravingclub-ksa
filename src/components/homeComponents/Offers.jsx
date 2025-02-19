import offers from "../../styles/HomeStyles/offers.module.css";
import Slider from "react-slick";
export default function Offers() {
  const OFFERS_PATH = "../../assets/offers-imgs/";
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
  };
  return (
    <div className="container">
      <span className="prev-title">Our Offers</span>
      <h2>Explore Our Exclusive Offers</h2>
      <Slider {...settings}>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Kids Meal</h5>
                <h6>Free Meal For your Kid on Wednesday</h6>
                <p>
                  Let your kid enjoy his free meal on wednesday from our
                  kidsmeal menu
                </p>
                <a href="#">Explore More</a>
              </div>
            </div>
            <div className={offers["img"]}>
              <img src={`${OFFERS_PATH}kids-meal.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Kids Meal</h5>
                <h6>Free Meal For your Kid on Wednesday</h6>
                <p>
                  Let your kid enjoy his free meal on wednesday from our
                  kidsmeal menu
                </p>
                <a href="#">Explore More</a>
              </div>
            </div>
            <div className={offers["img"]}>
              <img src={`${OFFERS_PATH}kids-meal_30.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Kids Meal</h5>
                <h6>Free Meal For your Kid on Wednesday</h6>
                <p>
                  Let your kid enjoy his free meal on wednesday from our
                  kidsmeal menu
                </p>
                <a href="#">Explore More</a>
              </div>
            </div>
            <div className={offers["img"]}>
              <img src={`${OFFERS_PATH}kids-meal.jpg`} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
