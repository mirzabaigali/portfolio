import React from "react";
import "./CustomFooter.css";

const CustomFooter = ({
  heading = "CustomFooter",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) => {
  return (
    <div className="footerList">
      <h4 className="fs-4 text-decoration-underline text-black heading ">
        {heading}
      </h4>
      <ul className="list-unstyled">
        {links.map((item, index) => {
          return (
            <li key={index}>
              {item.type === "Link" ? (
                <>
                  <a href={item.path}>{item.title}</a>
                </>
              ) : (
                <a href={item.path} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomFooter;
