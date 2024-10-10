import "bootstrap/dist/css/bootstrap.min.css";
import Social from "./Social";
import "../App.css";

function Introduction() {
  return (
    <div className="container-fluid p-5 text-white cards-height bg-dark-custom">
      <div className="container">
        <div className="col-m-8">
          <p>Introduction</p>
          <h1 className="display-3 mt-2">Overview.</h1>
          <p className="lead mt-4 work-experience-font">
            I am an 18-year-old student at Resslova Secondary Technical School,
            studying Information Technology. I specialize in web development,
            and I enjoy creating websites that incorporate 3D models using React
            and JavaScript. Outside of coding, I love sports and meeting new
            people.
          </p>
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
