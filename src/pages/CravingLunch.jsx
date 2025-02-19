// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import autoSlider from "../styles/HomeStyles/autoSlider.module.css";
// import AutoSliderItem from "../components/homeComponents/AutoSliderItem";
// import AUTO_SLIDER_TITLES from "../data/autoSliderTitles";
// export default function CravingLunch() {
//   const settings = {
//     infinite: true,
//     loop: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 4000,
//     cssEase: "linear",
//     variableWidth: true,
//     responsive: [
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 0,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };
//   return (
//     <div>
//       <div className={autoSlider["menu-select"]}>
//         <Slider {...settings}>
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[0]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[1]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[2]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[3]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[4]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[5]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[6]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[7]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[8]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[9]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[10]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[11]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[12]} />
//           <AutoSliderItem title={AUTO_SLIDER_TITLES.homeTitles[13]} />
//         </Slider>
//       </div>
//     </div>
//   );
// }
