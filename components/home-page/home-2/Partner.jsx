import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/logo/brand0.png",
    "/images/logo/brand1.png",
    "/images/logo/brand2.png",
    "/images/logo/brand3.png",
    "/images/logo/brand4.png",
    "/images/logo/brand5.png",
    "/images/logo/brand6.png",
    "/images/logo/brand7.png",
    "/images/logo/brand8.png",
    "/images/logo/brand9.png",
  ];

  return (
    <Slider {...settings} arrows={false}>
      {partnerLogos.map((logo, index) => (
        <div className="item" key={index}>
          <img src={logo} alt="" width={200} className="m-auto" />
        </div>
      ))}
    </Slider>
  );
};

export default Partner;
