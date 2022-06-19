import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quote from '../assets/images/quote-shape.png'
import img from '../assets/images/1.png'

const FeedBack = () => {

    const SampleNextArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='next'>
              <i class='bx bx-chevron-right' ></i>
            </button>
          </div>
        )
      }
      const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
          <div className='control-btn' onClick={onClick}>
            <button className='prev'>
              <i class='bx bx-chevron-left' ></i>
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
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      }
    ] 
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
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cum totam, laboriosam repellendus odit a modi eligendi quasi ex sed quaerat nemo, fugit aliquam nulla soluta fuga aperiam, eaque eos!
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Kai
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cum totam, laboriosam repellendus odit a modi eligendi quasi ex sed quaerat nemo, fugit aliquam nulla soluta fuga aperiam, eaque eos!
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Kai
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cum totam, laboriosam repellendus odit a modi eligendi quasi ex sed quaerat nemo, fugit aliquam nulla soluta fuga aperiam, eaque eos!
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Kai
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feedback__content__coment__slider">
                  <img src={quote} alt="" />
                  <div className="feedback__content__coment__slider__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cum totam, laboriosam repellendus odit a modi eligendi quasi ex sed quaerat nemo, fugit aliquam nulla soluta fuga aperiam, eaque eos!
                  </div>
                  <div className="feedback__content__coment__slider__info">
                    <div className="feedback__content__coment__slider__info__img">
                      <img src={img} alt="" />
                    </div>
                    <div className="feedback__content__coment__slider__info__details">
                      <div className="name">
                          Kai
                      </div>
                      <div className="posible">
                          Client
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default FeedBack