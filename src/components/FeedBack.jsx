import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedBack = () => {

    const SampleNextArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='next'>
              <i className='fa fa-long-arrow-alt-right'></i>
            </button>
          </div>
        )
      }
      const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='prev'>
              <i className='fa fa-long-arrow-alt-left'></i>
            </button>
          </div>
        )
      }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="feedback">
        <div className="feedback__content">
            <div className="feedback__content__title">
                <h1>Client Feddback</h1>
                <h3>There are many variations of passages of Lorem Ipsum available</h3>
            </div>
            <div className="feedback__content__coment">
            <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
            </div>
        </div>
    </div>
  )
}

export default FeedBack