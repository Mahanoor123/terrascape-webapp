import globe from "../assets/globe.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Animated Globe */}
      <motion.img
        src={globe}
        alt="Rotating Globe"
        className="w-[30vw] z-10 drop-shadow-2xl"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />

      {/* Animated Text */}
      <motion.h1
        className="absolute text-white text-4xl md:text-6xl font-extrabold tracking-wide z-10 text-center px-4 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="bg-clip-text font-[Jakarta Sans] text-8xl text-transparent bg-gradient-to-r from-[#00aaa7] via-[#fbfbff] to-[#bb005e] animate-pulse">
          Discover Hidden Wonders
        </span>
      </motion.h1>
    </div>
  );
};

export default Hero;

