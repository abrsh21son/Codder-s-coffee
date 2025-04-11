import { GiHamburgerMenu } from "react-icons/gi";
import {motion} from "framer-motion"

// eslint-disable-next-line react/prop-types
const Navbar = ({menuClick}) => {
  return (
    <nav className="w-full pt-10 z-40 absolute top-0 left-0 text-white">
      <div className="container">
        {/* logo section  */}
        <div className="flex justify-between items-center  " >
          <motion.h1 className="text-2xl font-semibold flex gap-3"
          
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          >
            Coders
            <span className="text-primary">Coffee</span>
          </motion.h1>
       
        {/* humberger menu  */}
          <motion.div className="text-3xl cursor-pointer"
           initial={{ opacity: 0, y: -100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.4,
            }}
            onClick={menuClick}
          >
          <GiHamburgerMenu size={30} />
          </motion.div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
