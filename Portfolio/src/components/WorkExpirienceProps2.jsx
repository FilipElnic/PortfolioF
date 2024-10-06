import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import your custom styles

function WorkExpirienceProps2({
  company = "Default Company",
  tag1 = "Default Tag 1",
  tag2 = "Default Tag 2",
  tag3 = "Default Tag 3",
  address = "Default Address",
  date = "Default Date",
}) {
  return (
    <div className="row mt-5 position-relative">
      {/* Left Column (Details) */}
      <div className="col-md-5 text-start">
        <h2 className="display-3 m-5">{company}</h2>
        <ul>
          <li className="display-6 m-2">{tag1}</li>
          <li className="display-6 m-2">{tag2}</li>
          <li className="display-6 m-2">{tag3}</li>
          <li className="display-6 m-2">{address}</li>
        </ul>
      </div>

      {/* Middle Line */}
      <div className="col-md-1 d-none d-md-block">
        <div className="vertical-line"></div>
      </div>

      {/* Right Column (Dates) */}
      <div className="col-md-5 text-start">
        <p className="display-6 m-5">{date}</p>
      </div>
    </div>
  );
}

WorkExpirienceProps2.propTypes = {
  company: PropTypes.string,
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  tag3: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string,
};

export default WorkExpirienceProps2;
