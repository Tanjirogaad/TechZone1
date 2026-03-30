import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../assets/banner_Hero1.jpg";
import banner2 from "../../assets/banner_Hero2.jpg";
import banner3 from "../../assets/banner_Hero3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function HeroSlider() {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          spaceBetween={24}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="content">
              <h4>Introducing the new</h4>
              <h3>
                Microsoft Xbox <br /> 360 controller
              </h3>
              <p>Windows xp / windows 10 / windows 11</p>
              <li className="btn">
                <Link to="/">Shop Now</Link>
              </li>
            </div>
            <img src={banner1} alt="banner1" />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="content">
              <h4>Introducing the new</h4>
              <h3>
                Microsoft Xbox <br /> 360 controller
              </h3>
              <p>Windows xp / windows 10 / windows 11</p>
              <li className="btn">
                <Link to="/">Shop Now</Link>
              </li>
            </div>
            <img src={banner2} alt="banner2" />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="content">
              <h4>Introducing the new</h4>
              <h3>
                Microsoft Xbox <br /> 360 controller
              </h3>
              <p>Windows xp / windows 10 / windows 11</p>
              <li className="btn">
                <Link to="/">Shop Now</Link>
              </li>
            </div>
            <img src={banner3} alt="banner3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
