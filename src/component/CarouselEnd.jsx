import { useState } from "react";
import CarouseOne from "../assets/carousel-1.jpg";
import CarouseTwo from "../assets/carousel-2.jpg";
import VideoModal from "./VideoModal";

function CarouselEnd() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item position-relative active"
              style={{ height: "100vh", minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={CarouseOne}
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                    Diego & Laura
                  </h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: "2px" }}
                    >
                      Nos vamos a casar
                    </h3>
                  </div>
                  <button className="btn-play mx-auto" onClick={openModal}>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="carousel-item position-relative"
              style={{ height: "100vh", minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={CarouseTwo}
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">
                    Diego & Laura
                  </h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3
                      className="text-uppercase font-weight-normal text-white m-0"
                      style={{ letterSpacing: "2px" }}
                    >
                      Nos vamos a casar
                    </h3>
                  </div>
                  <button className="btn-play mx-auto" onClick={openModal}>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
    </>
  );
}

export default CarouselEnd;
