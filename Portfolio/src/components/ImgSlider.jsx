import "../App.css";
import img1 from "../assets/images/css.png";
import img2 from "../assets/images/docker.png";
import img3 from "../assets/images/figma.png";
import img4 from "../assets/images/git.png";
import img5 from "../assets/images/html.png";
import img6 from "../assets/images/javascript.png";
import img7 from "../assets/images/nodejs.png";
import img8 from "../assets/images/reactjs.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function ImgSlider() {
  // Set the necessary CSS variables
  const width = "250px"; // Width of each image
  const height = "250px"; // Height of each image
  const quantity = images.length; // Total number of images

  return (
    <div>
      <div
        className="slider"
        style={{ "--height": height, "--width": width, "--quantity": quantity }}
      >
        <div className="list">
          {images.map((image, index) => (
            <div
              key={index}
              className="item"
              style={{ "--position": index + 1, "--width": width }}
            >
              <img src={image} alt={`Animation ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImgSlider;
