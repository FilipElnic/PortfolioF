import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";

function Projects() {
  return (
    <div className="container-fluid p-5 text-white cards-height bg-dark-custom">
      <div className="container custom-margin " id="Projects">
        <div className="col-m-8">
          <p>My work</p>
          <h1 className="display-3 mt-2">Projects.</h1>
          <p className="lead mt-4 work-experience-font">
            Following projects showcase my experience and the work I have done
            as a junior web developer. Using React, CSS, and JavaScript. My
            projects often include modern web technologies, animations, and even
            3D models to enhance interactivity and engagement. Each project
            reflects my dedication to learning and improving as I continue to
            expand my skills in front-end and back-end development.
          </p>
        </div>
        <div className="col-m-4"></div>
      </div>
      <div className="container custom-margin">
        <Cards />
      </div>
    </div>
  );
}

export default Projects;
