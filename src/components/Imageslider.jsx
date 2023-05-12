import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../image/pic3.jpg';
import pic2 from '../image/pic4.jpg';
import pic3 from '../image/pic5.jpg';

const Imageslider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const images = [
        { img: pic1 ,
          title: 'Yoga'
        },
        { img: pic2,
          title: 'Pilates'
        },
        { img: pic3,
          title: 'Pilates'
        },
      ];
    return (
        <div className="max-w-4xl mx-auto mt-5">
        <Slider {...settings}>
          <div>
            <img
              src={pic1}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src={pic2}
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src={pic3}
              alt="Slide 3"
            />
          </div>
        </Slider>
        <p>{images.title}</p>
      </div>
    )
}

export default Imageslider