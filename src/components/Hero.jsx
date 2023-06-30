import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Our style properties will be from Tailwind CSS - everything can be found at https://tailwindcss.com/docs/

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }

    const animate = () => {
      setAngle(
        (prevAngle) =>
          (prevAngle + 0.01 + (Math.random() - 0.5) * 0.02) % (2 * Math.PI)
      );
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Constants that are not changing
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const spaceshipPosition = {
    x: position.x + 50 * Math.cos(angle) - 25,
    y: position.y + 50 * Math.sin(angle) - 25,
  };

  return (
    <div className="w-full h-screen text-center" onMouseMove={handleMouseMove}>
      {/* {!isMobile && (
        <img
          src="../assets/ufo.png"
          alt="Spaceship"
          style={{
            position: "absolute",
            top: `${spaceshipPosition.y}px`,
            left: `${spaceshipPosition.x}px`,
            width: "50px",
            height: "50px",
            pointerEvents: "none",
          }}
        />
      )} */}

      <div className="page-container">
        <div className="flex flex-col items-center">
          <h1 className="py-4 text-gray-light cursor-default">
            Hello There <br /> I'm{" "}
            <span className="text-violet-600">Deni</span>!
          </h1>

          <h3 className="p-2 xsm:text-base sm:text-xl text-gray-light border border-transparent border-y-violet-600/40 w-[70%] m-auto cursor-default">
            I leverage cutting-edge technologies to develop full-stack
            applications, combining experience and knowledge for stable
            development. My approach fosters relentless innovation, pushing
            boundaries for clients.
          </h3>
          <p className="mt-20 uppercase text-sm tracking-widest text-gray-light">
            CONNECT TO
          </p>
          <h4 className="mt-2 uppercase text-lg tracking-widest text-gray-light">
            DESIGN | DEVELOP | DEPLOY
          </h4>
          <div className="flex flex-row my-6">
            <div className="rounded-button bg-gray-dark mx-6">
              <FaLinkedin size={26} />
            </div>
            <div className="rounded-button bg-gray-dark mx-6">
              <FaGithub size={26} />
            </div>
            <div className="rounded-button bg-gray-dark mx-6">
              <AiOutlineMail size={26} />
            </div>
          </div>
        </div>
      </div>
      <div className="xsm:hidden sm:flex absolute xsm:bottom-8 bottom-6 w-full justify-center items-center">
        {/* We will link our framer motion animation to the about page so we can go to that on the scroll button */}
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-violet-600/50 flex justify-center md:hover:translate-y-1 active:scale-95 items-start p-2">
            {/* This is how we use framer motion to create a scrolling gif for users to go to the next page */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-violet-600/50 mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
