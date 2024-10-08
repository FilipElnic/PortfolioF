import ImgSlider from "./ImgSlider";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Technologies() {
  return (
    <div className="container-fluid bg-dark-custom ">
      <div className="container text-center ">
        <div className="display-2  text-white ">Technologies</div>
      </div>
      <div className="custom-margin">
        <ImgSlider />
      </div>
    </div>
  );
}

export default Technologies;
