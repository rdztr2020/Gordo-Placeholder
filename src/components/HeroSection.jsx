import video from "../assets/meatsmokeshort.mp4";
import logo from "../assets/logotransparent.svg";
import hero from "../assets/meatsmoke.svg";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section
      className="relative flex h-screen items-center justify-center"
      id="top"
    >
      <div className="absolute inset-0 -z-29 h-full w-fulloverflow-hidden">
        
        <video
          src={video}
          className="h-60 w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black" />
      <div className="relative z-20 flex flex-col justify-end pb-30">
        <motion.img
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          transition={{ duration: 3 }}
          src={logo}
          alt="Gordo Mikes"
          className="w-80 p-4"
        />
      </div>
    </section>
  );
};

export default HeroSection;
