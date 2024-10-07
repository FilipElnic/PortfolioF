import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function Cards() {
  return (
    <>
      <div className="container-fluid bg-dark-custom ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
