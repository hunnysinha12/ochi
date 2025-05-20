// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-auto bg-zinc-900 pt-2 overflow-hidden"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentaion"].map((item, index) => {
          return (
            <div className="masker font-['Test Founders Grotesk X-Cond SmBd'] ">
              <div className="w-fit flex justify-center items-center">
                {index === 1 && (
                  <motion.img
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    className="w-[9vw] h-[5.5vw] mr-[1vw] rounded-md relative top-1 bg-red-900"
                  ></motion.img>
                )}
                <h1
                  key={index}
                  className="uppercase text-[7.5vw] leading-none tracking-tight font-medium"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex flex-wrap gap-10 justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-base tracking-tight leading-none font-light "
          >
            {item}
          </p>
        ))}
        <div className="start flex flex-wrap items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-base uppercase rounded-full ">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
