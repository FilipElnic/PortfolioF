import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#050816",
        borderTop: "solid 2px white",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <div className="container text-center">
        <p style={{ color: "white" }}>
          &copy; {new Date().getFullYear()} Filip Elznic. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
