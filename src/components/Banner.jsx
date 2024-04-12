import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
export default function Banner() {
  return (
    <Swiper
      speed={1200}
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="h-[520px] object-cover bg-no-repeat bg-cover flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="text-center bg-primary bg-opacity-15 p-10">
            <h1 className="text-white text-6xl font-semibold">
              Find Your Dream
            </h1>
            <h1 className="text-white text-6xl font-semibold">Home Today</h1>
            <p className="text-white">
              Are you ready to start the search for your dream home? Look no
              further than <br /> <strong>THE RAMIM</strong> Real Estate.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[520px] object-cover bg-no-repeat bg-cover flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
        >
          <div className="text-center bg-primary bg-opacity-15 p-10">
            <h1 className="text-white text-6xl font-semibold">
              Find Your Future Comfort
            </h1>
            <h1 className="text-white text-6xl font-semibold">
              And Happiness Here!
            </h1>
            <p className="text-white">
              Are you ready to start the search for your dream home? Look no
              further than <br /> <strong>THE RAMIM</strong> Real Estate.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[520px] object-cover bg-no-repeat bg-cover flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600)",
          }}
        >
          <div className="text-center bg-primary bg-opacity-15 p-10">
            <h1 className="text-white text-6xl font-semibold">
              A Wide Range of Options For Your Home
            </h1>
            <h1 className="text-white text-6xl font-semibold">
              And Personal Belongings
            </h1>
            <p className="text-white">
              Are you ready to start the search for your dream home? Look no
              further than <br /> <strong>THE RAMIM</strong> Real Estate.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
