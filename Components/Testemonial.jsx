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
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center test-txt">
            <h1>
              Check out our <span className="main-color"> students views</span>
            </h1>
          </div>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 test-crd">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/img/haris.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-start ms-5">
                    <p>
                      First, have a definite, clear practical ideal; a goal, an
                      objective. Second, have the necessary means to achieve
                      your ends; wisdom, money, materials, and methods.
                    </p>
                    <h3>Haris Cheema</h3>
                    <h4>CMS Student</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 test-crd">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/img/haris.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-start ms-5">
                    <p>
                      First, have a definite, clear practical ideal; a goal, an
                      objective. Second, have the necessary means to achieve
                      your ends; wisdom, money, materials, and methods.
                    </p>
                    <h3>Haris Cheema</h3>
                    <h4>CMS Student</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 test-crd">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/img/haris.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-start ms-5">
                    <p>
                      First, have a definite, clear practical ideal; a goal, an
                      objective. Second, have the necessary means to achieve
                      your ends; wisdom, money, materials, and methods.
                    </p>
                    <h3>Haris Cheema</h3>
                    <h4>CMS Student</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 test-crd">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/img/haris.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-start ms-5">
                    <p>
                      First, have a definite, clear practical ideal; a goal, an
                      objective. Second, have the necessary means to achieve
                      your ends; wisdom, money, materials, and methods.
                    </p>
                    <h3>Haris Cheema</h3>
                    <h4>CMS Student</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 test-crd">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/img/haris.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="text-start ms-5">
                    <p>
                      First, have a definite, clear practical ideal; a goal, an
                      objective. Second, have the necessary means to achieve
                      your ends; wisdom, money, materials, and methods.
                    </p>
                    <h3>Haris Cheema</h3>
                    <h4>CMS Student</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
