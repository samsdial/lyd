import { BsBalloonHeart, BsFillEnvelopeHeartFill } from "react-icons/bs";
import AboutOne from "../assets/about-1.jpg";
import AboutTwo from "../assets/about-2.jpg";

function About() {
  return (
    <div className="container-fluid py-5" id="about">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-4">Codigo de Vestimenta</h1>
          <h6
            className="text-uppercase text-primary mb-3"
            style={{ letterSpacing: "3px" }}
          >
            formal
          </h6>
          <BsBalloonHeart className="fa-2x text-dark" />
        </div>
        <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
          <div className="col-md-12 p-0 text-center text-md-right">
            <div className="h-100 text-center bg-secondary p-5">
              <h3 className="mb-3">Lluvia de sobres</h3>
              <BsFillEnvelopeHeartFill className="fa-5x text-dark pr-3" />
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-12 p-0" style={{ minHeight: "400px" }}>
            <img
              className="d-none d-md-block position-absolute w-100 h-100"
              src={AboutTwo}
              style={{ objectFit: "cover" }}
            />
            <img
              className="d-block d-md-none position-absolute w-100 h-100"
              src={AboutOne}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
