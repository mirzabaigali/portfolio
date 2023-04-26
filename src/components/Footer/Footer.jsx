import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import CustomFooter from "./CustomFooter";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="container pt-3">
          <div className="row">
            <div
              className="col-md-4 text-center text-md-start"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h4 className="fw-semibold text-decoration-underline text-dark">
                Mirza Arif Ali Baig
              </h4>
              <p className="fs-4 text-capitalize">
                a react-developer from india Looking For My Next Oppurtunity To
                Make a Change.The Digital way
              </p>
            </div>

            <div
              className="col-md-2 text-center text-md-start"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <CustomFooter
                heading="Important Links"
                links={[
                  {
                    type: "Link",
                    title: "Home",
                    path: "#home",
                  },
                  {
                    type: "Link",
                    title: "About",
                    path: "#about",
                  },
                  {
                    type: "Link",
                    title: "Skills",
                    path: "#skills",
                  },
                  {
                    type: "Link",
                    title: "Projects",
                    path: "#projects",
                  },
                  {
                    type: "Link",
                    title: "Contact",
                    path: "#contact",
                  },
                ]}
              />
            </div>
            <div
              className="col-md-4 text-center text-md-start"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <CustomFooter
                heading="Contatct Info"
                links={[
                  {
                    title: "+91 8977403988",
                    path: "tel:+91 8977403988",
                  },
                  {
                    title: "mirzaarifali.ba@gmail.com",
                    path: "mailto:mirzaarifali.ba@gmail.com",
                  },
                  {
                    title: "Falaknuma, Hyderabad, India",
                    path: "http://google.com/maps",
                  },
                ]}
              />
            </div>
            <div
              className="col-md-2 text-center text-md-start"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <CustomFooter
                heading="Social Links"
                links={[
                  {
                    title: "Facebook",
                    path: "http://facebook.com",
                  },
                  {
                    title: "Twitter",
                    path: "http://twitter.com",
                  },
                  {
                    title: "Instagram",
                    path: "http://instagram.com",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="text-center pt-2">
          Copyrights © 2023 - All Rights Reserved | This Template Is Made By ❤️
          Arif Ali
        </p>
      </div>
    </>
  );
};

export default Footer;
