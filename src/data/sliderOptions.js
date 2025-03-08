const SLIDER_OPTIONS = [
  {
    // HOME PAGE AUTOSLIDER OPTIONS
    homeAutoSlider: {
      infinite: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 4000,
      cssEase: "linear",
      variableWidth: true,
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
    },

    // MENU PAGE AUTOSLIDER OPTIONS
    menuAutoSlider: {
      infinite: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      cssEase: "linear",
      variableWidth: true,
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
    },
  },
];
export default SLIDER_OPTIONS;
