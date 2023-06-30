import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Listening to when we scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` w-full fixed items-center py-5 top-0 xsm:h-[70px] md:h-24 xsm:shadow-none sm:shadow-md shadow-black z-[100] ease-in duration-500 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {/* Navbar */}
      <div className=" navbar">
        <Link
          to="/"
          className="flex items-center gap-2 md:hover:translate-y-1 active:scale-95"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="active:scale-95 text-[18px] font-bold cursor-pointer flex ">
            DC &nbsp;
            <span className="sm:block hidden"> | Technologies</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-violet-600" : "text-white"
              } hover:text-violet-600 hover:translate-y-1 active:scale-95 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="md:hidden cursor-pointer">
          <AiOutlineMenu
            onClick={handleNav}
            className="active:scale-95"
            size={22}
          />
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 xsm:w-full xsm:h-screen bg-black/20 ease-in duration-500 active:outline-none"
            : ""
        }
      >
        {/* Sidebar */}
        <div className={nav ? "sidebar-open" : "sidebar-closed"}>
          <div className="flex justify-between w-full items-center">
            <Link
              to="/"
              className="flex items-center gap-2 hover:translate-y-1 active:scale-95"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
              
            </Link>
            <div className="rounded-button">
              <AiOutlineClose onClick={handleNav} size={22} />
            </div>
          </div>
          <div className="border-b border-violet-600/60 my-4 flex items-center justify-center">
            <p className="py-4 tracking-wide uppercase font-light xsm:text-sm sm:text-sm md:text-base">
              DESIGN | DEVELOP | DEPLOY
            </p>
          </div>

          <ul className="flex flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] sm:py-6 xsm:py-4 ${
                  active === nav.title ? "text-violet-600" : "text-white"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
