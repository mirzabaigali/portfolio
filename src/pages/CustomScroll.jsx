import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CustomScroll() {
  const { href } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [href]);

  return null;
}

export default CustomScroll;
