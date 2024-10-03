import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <div className="container-fluid p-5 text-white background-color-custom header-container w-9">
        <div className="col-sm-6 text-centert p-5 position-relative">
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
        <div className="col-sm-6">
          {/* 3D interactive model will be here */}
        </div>
      </div>
    </>
  );
}

export default Header;
