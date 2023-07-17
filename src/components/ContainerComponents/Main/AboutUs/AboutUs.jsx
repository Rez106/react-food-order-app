import { useEffect, useRef } from "react";
import Typed from "typed.js";

const AboutUs = () => {
  const aboutUs = useRef(null);
  useEffect(() => {
    const typed = new Typed(aboutUs.current, {
      strings: ["Made By Rez :)"],
      typeSpeed: 150,
      backSpeed: 100,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <h3 className="font-semibold text-8xl">
        <span ref={aboutUs} className="text-violet-500 drop-shadow-md"></span>
      </h3>
    </div>
  );
};
export default AboutUs;
