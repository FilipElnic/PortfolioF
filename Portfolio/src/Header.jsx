import "bootstrap/dist/css/bootstrap.min.css";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

function Header() {
  const Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <>
      <div className="container-fluid p-5 text-white background-color-custom  w-9 d-flex flex-column flex-sm-row align-items-center">
        <div className="col-12 col-sm-6 text-center p-5 position-relative mb-4  align-self-center">
          {/* Add the pink dot and line */}
          <div className="line-dot mx-5"></div>
          <motion.h1
            className="display-4"
            initial="hidden"
            whileInView="visible"
            variants={Variants}
          >
            Hi, I am <span className="highlight">Filip</span>
          </motion.h1>
          <motion.h3 initial="hidden" whileInView="visible" variants={Variants}>
            I am a junior full-stack developer,<br></br>currently studing in
            Czech Republic🛫
          </motion.h3>
        </div>
        <div className="col-12 col-sm-6  d-flex justify-content-center align-items-center  cs-height">
          {/* 3D interactive model */}
          <Spline scene="https://prod.spline.design/DUqmY-9Punzpvkyr/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default Header;
