import video from "../assets/meatsmoke.mp4";
import logo from "../assets/logotransparent.png";
import hero from "../assets/meatsmoke.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    
    <section className="relative flex h-screen items-center justify-center" id="top">
      
      <div className="absolute inset-0 -z-29 h-full w-full overflow-hidden">
      <p className="p-2 text-l tracking-tighter text-white font-extrabold">
          COMING SOON
        </p>
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black" />
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          src={logo}
          alt="Gordo Mikes"
          className="w-full p-4"
        />        
      </div>
    </section>
  );
};

export default HeroSection;
