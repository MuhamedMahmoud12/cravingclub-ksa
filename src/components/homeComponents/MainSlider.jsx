import mainSlider from "../../styles/HomeStyles/MainSlider.module.css";
import SliderItem from "./SldierItem";
import Slider from "react-slick";
export default function MainSlider() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    lazyLoad: "ondemand",
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
      <div className={`${mainSlider["main-img-slider"]}`}>
        <Slider {...settings}>
          <SliderItem
            className={`${mainSlider["item"]} ${mainSlider["item1"]} item`}
            prevTitle="Welcome to Craving Club"
            title="American Casual Dinning Restaurant"
            description="Craving Starts Over Here"
          />
          <SliderItem
            className={`${mainSlider["item"]} ${mainSlider["item2"]} item`}
            prevTitle="Welcome to Craving Club"
            title="Unique Dinning Experience"
            description="We take your dinning experience to the next level"
          />
          <SliderItem
            className={`${mainSlider["item"]} ${mainSlider["item3"]} item`}
            prevTitle="Welcome to Craving Club"
            title="Discover our customized offers"
            description="Whatever you need, you will find it here"
          />
        </Slider>
      </div>
    </>
  );
}
