import "bootstrap/dist/css/bootstrap.min.css";
import Social from "./Social";
import "../App.css";
import { motion } from "framer-motion";

function Introduction() {
  const Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  return (
    <div
      className="container-fluid p-5 text-white cards-height bg-dark-custom"
      id="Overview"
    >
      <div className="container">
        <div className="col-m-8">
          <motion.p initial="hidden" whileInView="visible" variants={Variants}>
            Introduction
          </motion.p>
          <motion.h1
            className="display-3 mt-2"
            initial="hidden"
            whileInView="visible"
            variants={Variants}
          >
            Overview.
          </motion.h1>
          <motion.p
            className="lead mt-4 work-experience-font"
            initial="hidden"
            whileInView="visible"
            variants={Variants}
          >
            I am an 18-year-old student at Resslova Secondary Technical School,
            studying Information Technology. I specialize in web development,
            and I enjoy creating websites that incorporate 3D models using React
            and JavaScript. Outside of coding, I love sports and meeting new
            people.
          </motion.p>
        </div>
        <div className="col-m-4"></div>
      </div>
      <div className="container custom-margin">
        <Social />
      </div>
    </div>
  );
}

export default Introduction;
