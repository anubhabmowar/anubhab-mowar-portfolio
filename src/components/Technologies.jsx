import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative, TbBrandThreejs, TbSql } from "react-icons/tb";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiExpo, SiExpress, SiPandas, SiPytorch, SiScikitlearn, SiTableau } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import zustand from "../assets/zustand.webp";
import powerbi from "../assets/powerbi.png";
import {  motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFlutter } from "react-icons/fa6";
import { DiPython } from "react-icons/di";

const Technologies = () => {
  const iconvariants = (duration,delay) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        delay:delay
      }
    }
  });

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-4 px-10 lg:px-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          
          loop={true}
          slidesPerGroup={1}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          className="w-full h-full h-min-[200px] lg:min-h-[250px] flex justify-center items-center"
        >
          {/* webdev  */}
          <SwiperSlide className="flex flex-col">
            <h3 className="w-full text-2xl font-bold text-center mb-16">Web Development</h3>
            <div
              className="flex flex-wrap justify-center items-center gap-4 px-10 lg:px-0"
            >
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaReact className="text-4xl text-cyan-400" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <TbBrandNextjs className="text-4xl text-white" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <BiLogoMongodb className="text-4xl text-[#4db33d]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiExpress className="text-4xl" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaNodeJs className="text-4xl text-[#3c873a]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <BiLogoPostgresql className="text-4xl text-[#336791]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <TbBrandThreejs className="text-4xl text-white" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <RiTailwindCssFill className="text-4xl text-[#06b6d4]" />
              </motion.div>
              
            </div>
          </SwiperSlide>

          {/* app dev  */}
          <SwiperSlide className="flex flex-col">
            <h3 className="w-full text-2xl font-bold text-center mb-16">App Development</h3>
            <div
              
              className="flex flex-wrap justify-center items-center gap-4 px-10 lg:px-0"
            >
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiExpo className="text-4xl text-white" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaFlutter className="text-4xl text-blue-500" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <TbBrandReactNative className="text-4xl text-blue-500" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <img src={zustand} alt="" className="w-8 h-8" />
              </motion.div>
              {/* <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaNodeJs className="text-4xl text-[#3c873a]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <BiLogoPostgresql className="text-4xl text-[#336791]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <TbBrandThreejs className="text-4xl text-white" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <RiTailwindCssFill className="text-4xl text-[#06b6d4]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiExpo className="text-4xl text-white" />
              </motion.div> */}
            </div>
          </SwiperSlide>

          {/* data science  */}
          <SwiperSlide className="flex flex-col">
            <h3 className="w-full text-2xl font-bold text-center mb-16">Data Science</h3>
            <div
              
              className="flex flex-wrap justify-center items-center gap-4 px-10 lg:px-0"
            >
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <DiPython className="text-4xl text-white" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <TbSql className="text-4xl text-white" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiPandas className="text-4xl text-[#4db33d]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiScikitlearn className="text-4xl" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiTableau className="text-4xl text-[#3c873a]" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <img src={powerbi} alt="Power BI" className="w-9 h-8" />
              </motion.div>
              <motion.div
                variants={iconvariants(2, 0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaAws className="text-4xl text-white" />
              </motion.div>
              {/* <motion.div
                variants={iconvariants(2, 2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <RiTailwindCssFill className="text-4xl text-[#06b6d4]" />
              </motion.div> */}
              
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Technologies;



