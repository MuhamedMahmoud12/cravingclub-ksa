import whoWeAre from "../../styles/HomeStyles/whoWeAre.module.css";
// import OwlCarousel from "react-owl-carousel";
import Slider from "react-slick";
export default function WhoWeAre() {
  const WHO_WE_ARE_PATH = "../../assets/who-we-are/";
  // const options = {
  //   loop: true,
  //   margin: 40,
  //   nav: false,
  //   dots: false,
  //   center: true,
  //   autoplay: true,
  //   lazyLoad: true,
  //   slidetransition: "linear",
  //   autoplayTimeout: 3000,
  //   autoplaySpeed: 3000,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       margin: 15,
  //     },
  //     600: {
  //       items: 2,
  //       margin: 20,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //     1400: {
  //       items: 4,
  //     },
  //   },
  // };
  // const settings = {
  //   infinite: true, // loop
  //   // centerMode: , // center
  //   // autoplay: true,
  //   lazyLoad: "ondemand", // lazyLoad
  //   speed: 3000, // slideTransition
  //   autoplaySpeed: 3000, // autoplayTimeout & autoplaySpeed
  //   cssEase: "linear", // slideTransition
  //   arrows: false, // nav (false)
  //   dots: false, // dots (false)
  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 8,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 8,
  //         slidesToScroll: 1,
  //         centerPadding: "10px",
  //       },
  //     },
  //     {
  //       breakpoint: 0,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerPadding: "5px",
  //       },
  //     },
  //   ],
  // };
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "240px",
    slidesToShow: 4,
    autoplay: true,
    speed: 3000, // slideTransition
    autoplaySpeed: 3000, // autoplayTimeout & autoplaySpeed
    cssEase: "linear", // slideTransition
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className={whoWeAre["who-we-are"]}>
      <div className="container">
        <div className={whoWeAre["content"]}>
          <img src="../../assets/bull-01.png" alt="bull-Logo" />
          <span>Who We Are</span>
          <h2>
            A restaurant with flavors that stand the test of time! We serve only
            real, high-quality food with authentic flavors and a vibrant
            atmosphere. An experience you’ll never forget. get ready for a
            life-changing
          </h2>
        </div>
      </div>
      <div
        className={`${whoWeAre["who-we-are-carousel"]} ${whoWeAre["left-gallery"]}`}
      >
        <Slider {...settings}>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img1.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img2.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img3.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img4.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img5.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img6.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img7.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img8.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img9.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img src={`${WHO_WE_ARE_PATH}img10.jpeg`} alt="who-we-are-img" />
          </div>
        </Slider>
      </div>
      <div
        className={`${whoWeAre["who-we-are-carousel"]} ${whoWeAre["right-gallery"]}`}
      >
        <Slider {...settings}>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img11.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img12.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img13.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img14.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img15.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img16.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img17.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img18.jpeg`} alt="who-we-are-img" />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img src={`${WHO_WE_ARE_PATH}img19.jpeg`} alt="who-we-are-img" />
          </div>
        </Slider>
      </div>
      <a href="#">Read Our Story</a>
    </section>
  );
}
