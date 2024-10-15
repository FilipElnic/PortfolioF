import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <>
      <motion.div
        className="custom-card-size custom-card mt-6 shadow-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div className="img-container ">
            <img
              src={props.img}
              className="card-img-top rounded-5 p-1 mb-2"
              alt={props.title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title p-2 mb-2 d-flex justify-content-center">
              {props.title}
            </h5>
            <p className="card-text p-4">{props.text}</p>
          </div>
        </a>
      </motion.div>
    </>
  );
}

export default Card;
