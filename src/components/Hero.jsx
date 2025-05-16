import globe from "../assets/globe.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Animated Globe */}
      <motion.img
        src={globe}
        alt="Rotating Globe"
        className="w-[70vw] sm:w-[50vw] md:w-[30vw] max-w-[400px] z-10 drop-shadow-2xl"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />

      {/* Animated Heading */}
      <motion.h1
        className="absolute text-white font-extrabold tracking-wide z-10 text-center leading-tight px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[Jakarta Sans] bg-clip-text text-transparent bg-gradient-to-r from-[#00aaa7] via-[#fbfbff] to-[#bb005e] animate-pulse">
          Discover Hidden Wonders
        </span>
      </motion.h1>
    </div>
  );
};

export default Hero;
