import Spline from "@splinetool/react-spline";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2kw7nvx", // Your Service ID
        "template_voakx5c", // Your Template ID
        e.target, // The form data
        "38mGiICJtaMmF4ga3" // Your User ID
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
    <div
      className="container-fluid p-5 text-white background-color-custom2  w-5 d-flex flex-column flex-sm-row"
      id="Contact"
    >
      <div className="col-12 col-sm-6 text-center position-relative mb-4  align-self-center">
        {/* Add the pink dot and line */}
        <div className="contact custom-margin-contact contact2 ">
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
        </div>
      </div>
      <div className="col-12 col-sm-6  d-flex justify-content-center align-items-center  cs-height">
        {/* 3D interactive model */}
        <Spline scene="https://prod.spline.design/B8qPp8HbRTDUa3zn/scene.splinecode" />
      </div>
    </div>
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
