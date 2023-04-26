import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, [Skills]);
  const html = useSpring({
    from: { width: "0%" },
    to: { width: "90%" },
    config: { duration: 3000 },
  });
  const css = useSpring({
    from: { width: "0%" },
    to: { width: "65%" },
    config: { duration: 3000 },
  });
  const javaScript = useSpring({
    from: { width: "0%" },
    to: { width: "60%" },
    config: { duration: 3000 },
  });
  const bootStrap = useSpring({
    from: { width: "0%" },
    to: { width: "70%" },
    config: { duration: 3000 },
  });
  const react = useSpring({
    from: { width: "0%" },
    to: { width: "65%" },
    config: { duration: 3000 },
  });

  return (
    <section id="skills" className="container mt-5" data-aos="fade-left">
      <h2 className="text-info text-uppercase text-decoration-underline">
        Skills
      </h2>
      <div className="row mt-3">
        <div className="col-lg-6 mb-3">
          <h4 className="text-secondary text-uppercase">HTML</h4>
          <div className="progress">
            <animated.div
              className="progress-bar"
              role="progressbar"
              style={html}
            >
              <span className="sr-only">90%</span>
            </animated.div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <h4 className="text-secondary text-uppercase">CSS</h4>
          <div className="progress">
            <animated.div
              className="progress-bar"
              role="progressbar"
              style={css}
            >
              <span className="sr-only">65%</span>
            </animated.div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <h4 className="text-secondary text-uppercase">JavaScript</h4>
          <div className="progress">
            <animated.div
              className="progress-bar"
              role="progressbar"
              style={javaScript}
            >
              <span className="sr-only">60%</span>
            </animated.div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <h4 className="text-secondary text-uppercase">Bootstrap</h4>
          <div className="progress">
            <animated.div
              className="progress-bar"
              role="progressbar"
              style={bootStrap}
            >
              <span className="sr-only">70%</span>
            </animated.div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <h4 className="text-secondary text-uppercase">ReactJS</h4>
          <div className="progress">
            <animated.div
              className="progress-bar"
              role="progressbar"
              style={react}
            >
              <span className="sr-only">65%</span>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
