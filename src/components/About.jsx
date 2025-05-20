/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const About = () => {
  const arrowControl = useAnimation();

  const handleHover = () => {
    arrowControl.start({ rotate: "90deg" }); // rotate straight
  };

  const handleHoverLeave = () => {
    arrowControl.start({ rotate: "45deg" }); // rotate back
  };

  return (
    <div className="bg-[#CDEA68] w-full p-20 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <h1 className="font-['Neue_Montreal'] text-[4.5vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="w-full pt-10 border-t-[1px] mt-20 border-[#a8c053] leading-none flex flex-wrap justify-center items-center gap-10">
        <div className="w-full md:w-full lg:w-[40%]">
          <h1 className="text-[6vw]">Our approach: </h1>

          <button
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
            className="flex gap-10 items-center px-10 py-4 mt-10 bg-zinc-900 rounded-full text-white"
          >
            Read More
            <motion.div
              animate={arrowControl}
              initial={{ rotate: "45deg" }}
              className="w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center uppercase"
            >
              <FaArrowUpLong />
            </motion.div>
          </button>
        </div>

        <div className="w-full md:w-full lg:w-1/2 h-[70vh] rounded-3xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
