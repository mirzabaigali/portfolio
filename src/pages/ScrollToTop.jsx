import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollTop.css";
function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${show ? "show" : ""}`}
      onClick={handleClick}
    >
      <FaArrowUp /> 
    </button>
  );
}
export default ScrollToTopButton;
