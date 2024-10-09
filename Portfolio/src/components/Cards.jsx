import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import img1 from "../assets/images/project1.png";
import img2 from "../assets/images/project2.png";
import img3 from "../assets/images/project3.png";
import img4 from "../assets/images/project4.png";

function Cards() {
  return (
    <>
      <div className="container-fluid bg-dark-custom ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={img1}
              title="Weather Application"
              link="https://pocasko-2024.vercel.app/"
              text="This project was for practising API. You enter a city name and you recieve current temperature, humidity and wind speed."
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={img2}
              title="Infinity animation"
              link="https://future-animations-k9ym.vercel.app/"
              text="This project was for practising css animations. It is infinity image slider, you can see other example on this page aswell. "
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={img3}
              title="Can animation only CSS"
              link="https://can-animation.vercel.app/"
              text="This project was for practising css animation. It is about hovering over a can and it will change it's design."
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card
              img={img4}
              title="NaucSeTelesa"
              link="#"
              text="This project is my school year project. It is for student who want to learn mathematical bodies. It will be in czech language."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
