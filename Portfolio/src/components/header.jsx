import "bootstrap/dist/css/bootstrap.min.css";
import Spline from "@splinetool/react-spline";
function Header() {
  return (
    <>
      <div className="container-fluid p-5 text-white background-color-custom  w-9 d-flex flex-column flex-sm-row align-items-center">
        <div className="col-12 col-sm-6 text-center p-5 position-relative mb-4  align-self-center">
          {/* Add the pink dot and line */}
          <div className="line-dot mx-5"></div>
          <h1>
            Hi, I am <span className="highlight">Filip</span>
          </h1>
          <h3>
            I am a full-stack junior developer,<br></br> I develop websites with
            3D models.
          </h3>
        </div>
        <div className="col-12 col-sm-6  d-flex justify-content-center align-items-center  cs-height">
          {/* 3D interactive model */}
          <Spline scene="https://prod.spline.design/DUqmY-9Punzpvkyr/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default Header;
