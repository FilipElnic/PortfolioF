import Spline from "@splinetool/react-spline";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2kw7nvx",
        "template_voakx5c",
        e.target,
        "38mGiICJtaMmF4ga3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div
        className="container-fluid p-5 text-white background-color-custom2  w-5 d-flex flex-column flex-sm-row"
        id="Contact"
      >
        <div className="col-12 col-sm-6 text-center position-relative mb-4  align-self-center">
          {/* Add the pink dot and line */}
          <motion.div
            className="contact custom-margin-contact contact2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="mb-5 mt-5 display-3">Contact</h1>
            <form onSubmit={sendEmail}>
              <div className="m-3 mt-5">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="m-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  className=" form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="m-3">
                <label className="form-label mb-3">Message:</label>
                <textarea
                  name="message"
                  required
                  className="form-control  mb-3 "
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="m-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mb-5"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center cs-height">
          <div className="spline-container">
            <Spline
              scene="https://prod.spline.design/B8qPp8HbRTDUa3zn/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

/*           <form onSubmit={sendEmail} className="w-100">
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                required
                className="form-control"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                required
                className=" form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label mb-3">Message:</label>
              <textarea
                name="message"
                required
                className="form-control  mb-3"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
              Send
            </button>
          </form> */
