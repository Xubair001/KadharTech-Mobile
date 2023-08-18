import React from 'react';
import Slider from "react-slick";

const ImgSlider = ({val}) => {
    const settings = {
        autoplay: true,
        dots: true,
        arrows:false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
      };
  return (
    <>
     <Slider {...settings}>
              {val.images.map((src, index) => (
                <div className="images-slide" key={index}>
                  <img
                    className="product-img"
                    width="100%"
                    src={src}
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </Slider>
    
    </>
  )
}

export default ImgSlider