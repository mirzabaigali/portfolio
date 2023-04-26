import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import CustomScroll from "./CustomScroll";
import p1 from "../../assets/screencapture-rickandmarty-netlify-app-2023-04-25-13_02_17.png";
import p2 from "../../assets/screencapture-cinematereact-netlify-app-2023-04-25-13_34_34.png";
import p3 from "../../assets/screencapture-expense-tracker-cal-netlify-app-2023-04-25-13_37_50.png";
import p4 from "../../assets/screencapture-shoppingcartrc-netlify-app-2023-04-25-14_20_41.png";
import p5 from "../../assets/screencapture-likemyphotonew-netlify-app-2023-04-25-14_24_44.png";
import p6 from "../../assets/screencapture-localhost-3000-2023-04-25-16_56_52.png";
import "./Project.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ link, img }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const projects = [
    {
      id: 1,
      link: "https://likemyphotonew.netlify.app/",
      name: "Project 5",
      imageUrl: p6,
    },
    {
      id: 2,
      link: "https://cinematereact.netlify.app/",
      name: "Project 2",
      imageUrl: p2,
    },
    {
      id: 3,
      link: "https://rickandmarty.netlify.app",
      name: "Project 1",
      imageUrl: p1,
    },

    {
      id: 4,
      link: "https://expense-tracker-cal.netlify.app",
      name: "Project 3",
      imageUrl: p3,
    },
    {
      id: 5,
      link: "https://shoppingcartrc.netlify.app",
      name: "Project 4",
      imageUrl: p4,
    },
    {
      id: 6,
      link: "https://likemyphotonew.netlify.app/",
      name: "Project 5",
      imageUrl: p5,
    },
  ];

  return (
    <section id="projects">
      <div className="project-container" data-aos="fade-up">
        {projects.map((item) => (
          <div className="p" key={item.id}>
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.imageUrl} alt={item.name} className="p-img" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
