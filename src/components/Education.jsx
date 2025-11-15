import { EDUCATION_CONTENT } from "../constants";
import {motion} from "framer-motion"
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Education</motion.h1>
      <div className="mx-6">
        {EDUCATION_CONTENT.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-4 font-semibold ">
                {education.degree}-
                <span className="text-sm text-purple-100">
                  {education.branch}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.institution}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
