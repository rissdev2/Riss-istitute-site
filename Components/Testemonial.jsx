import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <br className="br-hide" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center test-txt">
            <h1>
              Check out our <span className="main-color"> students views</span>
            </h1>
          </div>
        </div>
        <Swiper
        direction={"horizontal"}
        loop={true}
        centeredSlides={true}
        autoHeight={true}
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView:2,
                spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
                spaceBetween: 40,
            },
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>

          
        <div className="content-wrapper">
					<div className="content">
						<div className="swiper-avatar"><img src="assets/img/hamad.svg" className="img-fluid" alt="student-image" /></div>
						<p>RISS is my second home. I have built great relationships with my classmates, teachers, and staff. I like RISS because it offers very practical courses for us.


</p>
						<p className="cite">- Hammad Ahmad</p>
					</div>
				</div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="content-wrapper">
					<div className="content">
						<div className="swiper-avatar"><img src="assets/img/abdul.svg" className="img-fluid" alt="student-image" /></div>
						<p>I am excited to study at RISS. I really like the instructors and advisors. They always help me when I have questions. I also really like my program and teachers.

</p>
						<p className="cite">- Abdul Rehman</p>
					</div>
				</div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="content-wrapper">
					<div className="content">
						<div className="swiper-avatar"><img src="assets/img/nomi.svg" className="img-fluid" alt="student-image" /></div>
						<p>I have had a very good experience at RISS. The campus environment and class schedule are very convenient. The hands on teaching style provides good learning opportunities
</p>
						<p className="cite">- Noman Rajput</p>
					</div>
				</div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="content-wrapper">
					<div className="content">
						<div className="swiper-avatar"><img src="assets/img/haris.svg" className="img-fluid" alt="student-image" /></div>
						<p>Riss is a practical technical institute and offers an ideal study environment those who wants experience both professionally and educationally.I have had a very good experience. And one of the  best IT Institute in Seikhupura.
</p>
						<p className="cite">- Haris</p>
					</div>
				</div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="content-wrapper">
					<div className="content">
						<div className="swiper-avatar"><img src="assets/img/jasihr.svg" className="img-fluid" alt="student-image" /></div>
						<p>I have had a very good experience at RISS. The campus environment and class schedule are very convenient. The hands on teaching style provides good learning opportunities
</p>
						<p className="cite">- Jashir</p>
					</div>
				</div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
}
