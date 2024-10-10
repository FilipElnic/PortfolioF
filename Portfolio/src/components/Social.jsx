import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Github from "../assets/images/github.png";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

function Social() {
  return (
    <div className="social">
      <div className="container-fluid bg-dark-custom ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={Linkedin}
              title="LinkedIn"
              text="Connect with me on LinkedIn."
              link="https://www.linkedin.com/in/filip-elznic"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={Instagram}
              title="Instagram"
              text="Connect with me on LinkedIn."
              link="https://www.instagram.com/fprofilipka/"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={Github}
              title="Github"
              text="Connect with me on LinkedIn."
              link="https://github.com/FilipElnic"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img="https://via.placeholder.com/150"
              title="My LinkedIn"
              text="Connect with me on LinkedIn."
              link="https://www.linkedin.com/in/filip-elznic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
