import logo from "../../../images/LOGO-HORT1.svg";
import Navbar from "./navbar/Navbar";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Home() {
  return <div>Home</div>;
}


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ( 
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }; 
  }, []);


  return (
    <div className="relative">
    <div className="fixed md:static top-0 right-0 left-0 bg-customBlack w-full h-[120px] shadow flex justify-center">
      <div className="w-full sm:w-11/12 lg:w-10/12 flex justify-between items-center z-50">
       <Link to="/"> <img src={logo} alt="logo" className="h-[100px] p-3 pt-0"/></Link>

        <button 
          ref={buttonRef} 
          onClick={toggleMenu} 
          className="absolute top-8 right-3 m-2 p-2 h-fit bg-customGreen rounded-xl z-50 md:hidden"
        >

         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>

        <AnimatePresence>
        {(isMenuOpen || screenWidth >= 768) && (
          <motion.div 
            ref={menuRef} 
            key="mobile-menu"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`z-60 ${screenWidth >= 768 ? "transform-none static" : "fixed top-0 right-0 h-fit w-full bg-white shadow-lg"} `}
          >
          <Navbar setIsMenuOpen={setIsMenuOpen} />
        </motion.div>
        )}
          </AnimatePresence>
      </div>
      
    </div>
    <div className="fixed md:static top-[118px] md:top-[129px] w-full h-[25px] bg-customRed text-center">
      <h2 className="text-lg font-semibold text-white">POP-UP UTSTILLING 13/4 - 31/5</h2>
    </div>
    </div>
  );
}