import React, { useEffect, useState } from "react";
import "./components.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function BtnToTop() {
  const [goTop, setGoTop] = useState(false);
  // button go to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
      // setGoTop(window.scrollY >= 200)
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {goTop && (
        <button onClick={scrollToTop} className="btn-top">
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </div>
  );
}
