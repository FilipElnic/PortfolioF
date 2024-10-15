import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { motion } from "framer-motion";

function WorkExpirienceProps1({
  company = "Default Company",
  tag1 = "Default Tag 1",
  tag2 = "Default Tag 2",
  address = "Default Address",
  date = "Default Date",
}) {
  const Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };
  const Variants2 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <div className="row mt-5 position-relative">
      {/* Left Column (Dates) */}
      <motion.div
        className="col-md-5 text-end"
        initial="hidden"
        whileInView="visible"
        variants={Variants}
      >
        <p className="m-5 work-experience-font">{date}</p>
      </motion.div>

      {/* Middle Line */}
      <div className="col-md-1 d-none d-md-block">
        <div className="vertical-line"></div>
      </div>

      {/* Right Column (Details) */}
      <motion.div
        className="col-md-5 text-start custom-margin-left shadow-card bg-expirienc"
        initial="hidden"
        whileInView="visible"
        variants={Variants}
      >
        <motion.h2
          className="display-6 m-5"
          initial="hidden"
          whileInView="visible"
          variants={Variants2}
        >
          {company}
        </motion.h2>
        <motion.ul initial="hidden" whileInView="visible" variants={Variants2}>
          <li className="m-2 work-experience-font">{tag1}</li>
          <li className="m-2 work-experience-font">{tag2}</li>
          <li className="m-2 work-experience-font">{address}</li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

WorkExpirienceProps1.propTypes = {
  company: PropTypes.string,
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string,
};

export default WorkExpirienceProps1;
