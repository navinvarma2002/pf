import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";

import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

import "../components/center.css";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="adjust" style={{ paddingLeft: "8px" }}>
      <Tilt className="xs:w-[265px] w-full">
        <div className="Hideoverview">
          <motion.dev
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full  p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-gradient-to-r from-violet-600 to-indigo-600  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
            >
              <img
                src={icon}
                alt={title}
                className="w-16 h-16 object-contain"
              />

              <h3 className="text-black text-[20px] font-bold text-center">
                {title}
              </h3>
            </div>
          </motion.dev>
        </div>
      </Tilt>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.dev>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        <div>
          <p>
            🔹 Skilled in building robust web applications using React.js, Javascript, HTML, CSS, TailwindCSS.
          </p>
          <p>
            🔹 Proficient in creating RESTful APIs, integrating third-party
            services, and optimizing application performance.
          </p>
          <p>
            🔹 Experienced in collaborative problem-solving, and delivering
            high-quality code on schedule.
          </p>
          <p>
            🔹 Passionate about staying up-to-date with the latest technologies
            and continuously enhancing my skills to tackle new challenges.
          </p>
          <p>
            Let's connect and discuss how we can collaborate on exciting
            projects! Thankyou.
          </p>
        </div>
      </motion.p>
      <div className="hidecards">
        <div className="mt-20  flex flex-wrap gap-10 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
