import { useEffect, useRef } from "react";
import Typed from "typed.js";

const User = () => {
  const comingSoon = useRef(null);

  useEffect(() => {
    const typed = new Typed(comingSoon.current, {
      strings: ["Coming Soon!"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
      showCursor: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <h3 className="font-semibold text-8xl">
        <span ref={comingSoon} className="text-sky-500 drop-shadow-md"></span>
      </h3>
    </div>
  );
};
export default User;
