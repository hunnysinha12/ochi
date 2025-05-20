// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-10 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43] overflow-hidden"
    >
      <div className="text uppercase border-t-2 border-b-2  border-zinc-300 flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] pr-10 font-semibold  leading-none py-10 font-['Test Founders Grotesk X-Cond SmBd']"
        >
          WE are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[24vw] font-semibold leading-none py-10 font-['Test Founders Grotesk X-Cond SmBd']"
        >
          WE are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
