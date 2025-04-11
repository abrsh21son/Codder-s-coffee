import { FaFacebook, FaLinkedin, FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import paymentImage from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-2xl font-bold">Coders Coffee</h1>
            <p className="text-sm max-w-[300px] opacity-90">
              At Coders Coffee, we understand that the right cup of coffee can
              fuel creativity and enhance focus. Our specialty blends are
              crafted specifically for those who code, create, and innovate.
            </p>
            <div className="flex flex-col gap-4">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <FaPhone className="text-yellow-400" />
                +251 985486416
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <FaMapLocationDot className="text-yellow-400" />
                Ethiopia, Addis Ababa
              </motion.p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 5 }} className="hover:text-yellow-400 cursor-pointer">
                  Home
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="hover:text-yellow-400 cursor-pointer">
                  About
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="hover:text-yellow-400 cursor-pointer">
                  Contact us
                </motion.li>
              </ul>
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 5 }} className="hover:text-yellow-400 cursor-pointer">
                  Privacy policy
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="hover:text-yellow-400 cursor-pointer">
                  Application link
                </motion.li>
                <motion.li whileHover={{ x: 5 }} className="hover:text-yellow-400 cursor-pointer">
                  Ethio Buna
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Social Links & Payment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center lg:items-end"
          >
            <div className="space-y-6 w-full max-w-[250px]">
              <div>
                <h1 className="text-2xl font-semibold mb-4">Follow Us</h1>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: "#F59E0B" }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full p-2 border-2 border-white hover:border-yellow-500 transition-all"
                    href="#"
                  >
                    <GrGithub size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, backgroundColor: "#F59E0B" }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full p-2 border-2 border-white hover:border-yellow-500 transition-all"
                    href="#"
                  >
                    <FaFacebook size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, backgroundColor: "#F59E0B" }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full p-2 border-2 border-white hover:border-yellow-500 transition-all"
                    href="#"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
                <motion.img 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  src={paymentImage} 
                  alt="payment methods"
                  className="w-full max-w-[200px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 pt-6 border-t border-white/30 text-center"
        >
          <p className="text-sm opacity-80">Copyright &copy; {new Date().getFullYear()} Coders Coffee. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;