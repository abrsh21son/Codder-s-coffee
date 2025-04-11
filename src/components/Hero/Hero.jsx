import { GrGithub } from "react-icons/gr";
import BgImage from "../../assets/bg-slate.png";
import Blackcoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgoundSize: "cover",
  backgoundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidbar, setSidbar] = useState(false)
  function handlemenuclick() {
    setSidbar((sidbar)=>!sidbar)
  }
  return (
    <main style={bgImage}>
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[750px]">
      <div className="container px-4 sm:px-6">
        {/* navbar section - unchanged */}
        <Navbar sidbar={sidbar} setSidbar={setSidbar} menuClick={handlemenuclick} />

        {/* Hero section - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[500px] sm:min-h-[600px] md:min-h-[750px]">
          {/* text content section - responsive spacing */}
          <div className="text-lightOrange mt-[60px] sm:mt-[80px] md:mt-0 p-4 space-y-12 sm:space-y-20 md:space-y-28">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight ml-4 sm:ml-8 md:ml-14"
            >
              ኑ ቡና ጠጡ ☕
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: [10, -10, -3], y: 100, rotate: 5 }}
              animate={{ opacity: 1, x: [0, 0, -4], y: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="relative"
            >
              <div className="relative">
                <h1 className="text-xl sm:text-2xl">Black lifestyle lovers,</h1>
                <p className="leading-relaxed sm:leading-loose text-xs sm:text-sm opacity-55">
                  Ethiopian coffee lovers enjoy a deep connection to their
                  culture and tradition. Coffee in Ethiopia is more than just
                  a drink; it&aps;s a social experience. Many people gather
                  for coffee ceremonies, where beans are roasted, ground, and
                  brewed in a special pot called a &qoutes;Jebena.&qoutes;
                  This ritual fosters community and conversation, making
                  coffee an important part of daily life. Ethiopian coffee is
                  known for its rich flavors and unique aromas, which reflect
                  the country&aps;s diverse coffee-growing regions. For
                  enthusiasts, drinking Ethiopian coffee is a celebration of
                  heritage and togetherness.
                </p>
              </div>
              <div className="absolute -top-4 sm:-top-6 -left-6 sm:-left-10 bg-gray-700/25 w-[250px] sm:w-[300px] h-[200px] sm:h-[260px]" />
            </motion.div>
          </div>

          {/* image section - responsive positioning */}
          <div className="relative pr-0 sm:pr-20 md:pr-40 lg:pr-72">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] absolute left-20 sm:left-32 md:left-40 top-12 sm:top-16 md:top-20 border-[15px] sm:border-[18px] md:border-[20px] border-primary rounded-full z-10"
            />

            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="relative z-40 h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px] img-shadow mx-auto"
              src={Blackcoffee}
              alt="black coffee"
            />

            <div className="absolute -top-12 sm:-top-16 md:-top-20 left-[100px] sm:left-[150px] md:left-[200px] z-[1]">
              <h1 className="font-bold text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px] w-full scale-100 sm:scale-125 md:scale-150 text-darkGray/40 leading-none">
                Black coffee
              </h1>
            </div>

            {/* Hidden on smaller screens */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="absolute -right-4 sm:-right-8 md:-right-10 top-32 sm:top-40 z-10 text-lightOrange mt-[60px] sm:mt-[80px] md:mt-0 p-4 space-y-12 sm:space-y-20 md:space-y-28 hidden sm:block"
            >
              <h1 className="hidden text-7xl font-bold leading-tight ml-14">
                ETHIO COFFEE
              </h1>
              <div className="relative w-[250px] sm:w-[280px] md:w-[300px]">
                <h1 className="text-xl sm:text-2xl">Black lifestyle lovers,</h1>
                <p className="leading-relaxed sm:leading-loose text-xs sm:text-sm opacity-55">
                  Ethiopian coffee lovers enjoy a deep connection to their
                  culture and tradition. Coffee in Ethiopia is more than just
                  a drink; it&aps;s a social experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

                {/* sidbar  */}

        {sidbar &&
          <motion.div className="absolute right-0 top-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop:blur-sm z-30"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.2,
          }}
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-6 text-white">
                {/* line  */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* Github  */}
                <div className="rounded-full inline-block p-1  border-2 ring-1 ring-white border-white hover:bg-yellow-500">
                  <GrGithub size={24} />
                </div>
                {/* faceBook  */}
                <div className="rounded-full inline-block p-1  border-2 ring-1 ring-white border-white hover:bg-yellow-500">
                  <FaFacebook size={24} />
                </div>
            
                {/* Linkedn  */}
                <div className="rounded-full inline-block p-1  border-2 ring-1 ring-white border-white hover:bg-yellow-500">
                  <FaLinkedin size={24} />
                </div>
                {/* line  */}
                <div className="w-[1px] h-[70px] bg-white"></div>

              </div>

            </div>
          </motion.div>
        }
      </section>
    </main>
  );
};

export default Hero;
