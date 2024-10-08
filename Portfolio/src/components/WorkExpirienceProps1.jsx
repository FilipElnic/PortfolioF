import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import your custom styles

// Use default values directly in the function parameters
function WorkExpirienceProps1({
  company = "Default Company",
  tag1 = "Default Tag 1",
  tag2 = "Default Tag 2",
  address = "Default Address",
  date = "Default Date",
}) {
  return (
    <div className="row mt-5 position-relative">
      {/* Left Column (Dates) */}
      <div className="col-md-5 text-end">
        <p className="m-5 work-experience-font">{date}</p>
      </div>

      {/* Middle Line */}
      <div className="col-md-1 d-none d-md-block">
        <div className="vertical-line"></div>
      </div>

      {/* Right Column (Details) */}
      <div className="col-md-5 text-start custom-margin-left shadow-card bg-expirienc">
        <h2 className="display-6 m-5">{company}</h2>
        <ul>
          <li className="m-2 work-experience-font">{tag1}</li>
          <li className="m-2 work-experience-font">{tag2}</li>
          <li className="m-2 work-experience-font">{address}</li>
        </ul>
      </div>
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
