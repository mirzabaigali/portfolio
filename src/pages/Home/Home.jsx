import React, { useEffect } from "react";
import Logo1 from "../../assets/animation-logo.gif";
// import { Link, useNavigate } from "react-router-dom";
import cv from "../../assets/cv.pdf";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease",
    });
  });

  return (
    <section
      id="home"
      className="banner_wrapper"
      data-aos="fade-down-right"
      data-aos-delay="500"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 order-lg-1 order-2 banner-content"
            data-aos="fade-down-right"
            data-aos-delay="700"
          >
            <h2 className="text-uppercase">
              Hello
              <span
                role="img"
                className="wave"
                aria-labelledby="wave"
              >
                👋
              </span>
            </h2>
            <h2>
              My Name Is{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                <Typed
                  strings={["MIRZA ARIF ALI BAIG", "I AM A REACT DEVELOPER"]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </span>
            </h2>

            <div className="mt-5 mb-5">
              <a href="#contact">
                <button className="banner-button">Hire Me</button>
              </a>
              <a href={cv} download>
                <button className="banner-button ms-3">Get CV</button>
              </a>
            </div>
            <div className="i-desc">
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>

          <div className="col-lg-5 order-lg-2 order-1 text-center">
            <div className="top-right-img">
              <img
                src={Logo1}
                alt="Logo"
                width={"500px"}
                height={"500px"}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
