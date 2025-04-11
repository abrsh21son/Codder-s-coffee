import freshCoffee from "../../assets/freshCoffee.png";
import blackCoffe from "../../assets/coffee/coffee1.png";
import hotkCoffe from "../../assets/coffee/coffee3.png";
import { motion } from "framer-motion";
const serviceData = [
  {
    id: 1,
    image: blackCoffe,
    title: "Black Coffee",
    description: "Enjoy the rich, bold flavor of our premium black coffee, made from the finest Arabica beans. ",
  },
  {
    id: 2,
    image: hotkCoffe,
    title: "Hot Coffee",
    description: "Savor the warmth of our classic hot coffee, crafted with care to deliver a smooth and satisfying taste.",
  },
  {
    id: 3,
    image: blackCoffe,
    title: "Ethiopian Coffee",
    description: "Experience the unique flavors of our Ethiopian coffee, known for its bright acidity and fruity undertones.",
  }
];
const cardVariants = {

  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    stiffness: 150,
    damping: 10,
    ease: "easeInOut"
  }
  
};
const containerVariant = {

  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  transition: {
    type: "spring",
    delay:0.6,
    staggerChildren:0.4,
  }
  
}

const Services = () => {
  return (
    <section className="container  my-16 space-y-6">
      <div className="">
        {/* header section  */}
        <div className="text-center mx-w-lg mx-auto space-y-2 flex flex-col justify-center items-center gap-3">
          <motion.h1
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.8,
           }}
            className="text-5xl text-lightgray shadow-xl">
            fresh and <span className="text-primary">tasty coffee</span>
          </motion.h1>
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.8, y: 20 }} // Initial state
              animate={{ opacity: 1, scale: 1, y: 0 }} // Animate to final state
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
              whileHover={{ ease: "easeInOut" }}
              className="w-screen bg-cover object-cover min-h-[400px] rounded-lg hover:scale-110 hover:duration-300"
              src={freshCoffee}
              alt=" fresh coffee"
            />
          </div>
          <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 1 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 10,
             delay: 0.8,
           }}>
            <h1 className="text-5xl text-lightgray py-5">
              <span className="text-primary">Our Sweet</span>
              <span className=" ml-6"> coffee</span>
            </h1>
            <p className="leading-6 left-0  text-center text-clip mx-auto max-w-[800px] text-darkGray first-letter:italic first-letter:text-2xl">
              We believe that every cup tells a story. Our carefully sourced
              beans are roasted to perfection, bringing out rich and delightful
              flavors that awaken your senses. Each sip delivers a harmonious
              blend of sweetness and aroma, making your coffee experience truly
              indulgent. Whether you prefer a classic espresso or a flavored
              latte, our sweet coffee options are crafted to satisfy any palate.
              Join us in celebrating the joy of coffee—where every cup is a
              moment of happiness!
            </p>
          </motion.div>
        </div>
        {/* card section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView={"visible"}
          viewport={{amount:0.8}}
          className="flex justify-center items-center">
          {serviceData.map((item) => (
            <motion.div key={item.id} className=""
            variants={cardVariants}
            >
              <div className="flex flex-col items-center justify-center gap-8 ">
                
                <img src={item.image} alt=""
                  className="cursor-pointer img-shadow2 max-w-[200px] mx-auto  hover:scale-110 hover:duration-300"
                />
                <div className="flex flex-col ">
                  <h1 className="text-primary text-2xl p-2">{item.title }</h1>
                  <p className="text-darkGray max-w-[200px] mr-20">{item.description}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
          
      </div>
    </section>
  );
};

export default Services;
