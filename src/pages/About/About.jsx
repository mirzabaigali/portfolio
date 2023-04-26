import React, { useEffect } from "react";
import "./About.css";
import cv from "../../assets/cv.pdf";
import "aos/dist/aos.css";
import "../Home/Home.css";
import image from "../../assets/animation2.gif";
import image1 from "../../assets/images/client-img/logo1.webp";
import image2 from "../../assets/images/client-img/logo2.webp";
import image3 from "../../assets/images/client-img/logo3.webp";
import image4 from "../../assets/images/client-img/logo4.webp";
import image5 from "../../assets/images/client-img/logo5.webp";
import image6 from "../../assets/images/client-img/logo6.webp";
import image7 from "../../assets/images/client-img/logo7.webp";
import image8 from "../../assets/images/client-img/logo8.webp";
import image9 from "../../assets/images/client-img/logo9.webp";
import { RiPhoneFill } from "react-icons/ri";
import Aos from "aos";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      easing: "ease",
    });
  }, []);
  const Logos = [
    {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
    },
  ];
  const images = Logos.flatMap((obj) => Object.values(obj));
  return (
    <section
      data-aos="zoom-out-left"
      data-aos-delay="500"
      id="about"
      className="about_wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0 ">
            <img
              src={image}
              alt="logo"
              width={"700px"}
              height={"500px"}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h1 className="text-uppercase">
              let's
              <br />
              introduce about <br />
              myself
            </h1>
            <h6 className="text-black-50">
              Hi, I'm Arif Ali, a React developer with two years of experience
              building web applications. I'm passionate about creating
              high-quality, responsive user interfaces that provide a seamless
              user experience.
            </h6>
            <h6 className="text-black-50">
              During my time as a developer, I've worked and I've a deep
              understanding of React and its ecosystem, including Redux, React
              Router. <br />
              In my free time, I enjoy working on personal projects that
              challenge me and allow me to explore new technologies. I'm always
              looking for new opportunities to collaborate with other developers
              and businesses on exciting projects.
            </h6>
            <h6 className="text-black-50">
              If you're interested in learning more about my experience or would
              like to discuss a potential collaboration, please feel free to get
              in touch. I'd love to hear from you!
            </h6>
            <br />
            <a href={cv} download>
              <button className="banner-button">Download cv</button>
            </a>
          </div>
        </div>
        <div className="row justify-contnent-center pt-5">
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="zoom-out-up"
            data-aos-delay="200"
          >
            <div className="row">
              {/* <img src={image1} alt="Logo" className="img-fluid" /> */}
              {images.map((src, index) => {
                return (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <div className="single-logo-item" key={index}>
                      <img src={src} alt="Logo" className="img-fluid" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="offset-lg-2 col-lg-4 col-md-10"
            data-aos="zoom-out-down"
            data-aos-delay="300"
          >
            <div className="client-info">
              <div className="d-flex">
                <span className="large">2</span>
                <span className="small">
                  years <br /> Experience <br />
                  Working
                </span>
              </div>

              <div className="call-now d-flex py-4">
                <div>
                  <span>
                    <RiPhoneFill />
                  </span>
                </div>
                <div className="ms-4">
                  <p>Call Us Now</p>
                  <h5>+91 8977403988</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
