import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
  return (
    <>
      <div className="custom-card-size custom-card mt-6">
        <div className="img-container">
          <img
            src={props.img}
            className="card-img-top rounded-5 p-1 mb-2"
            alt={props.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title p-2 mb-2 d-flex justify-content-center">
            {props.title}
          </h5>
          <p className="card-text p-4">{props.text}</p>
          <a
            href="#"
            className="btn btn-primary d-flex justify-content-center m-3 rounded-3"
          >
            Explore Project
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
