import { BsBalloonHeart } from "react-icons/bs";

function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-white py-5"
      id="contact"
      style={{ marginTop: "90px" }}
    >
      <div className="container text-center py-5">
        <div className="section-title position-relative text-center">
          <h1 className="font-secondary display-3 text-white">Gracias</h1>
          <BsBalloonHeart className="fa-2x text-white" />
        </div>
        <div className="d-flex justify-content-center py-2">
          <p className="text-white" href="#">
            dialstudios@gmail.com
          </p>
          <span className="px-3">|</span>
          <p className="text-white" href="#">
            +57 321 2679 283
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
