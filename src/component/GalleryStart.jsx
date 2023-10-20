import { BsBalloonHeart } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import GalleryOne from "../assets/gallery-1.jpg";
import GalleryTwo from "../assets/gallery-2.jpg";
import GalleryThree from "../assets/gallery-3.jpg";
import GalleryFour from "../assets/gallery-4.jpg";
import GalleryFive from "../assets/gallery-5.jpg";
import GallerySix from "../assets/gallery-6.jpg";

function GalleryStart() {
  return (
    <div
      className="container-fluid bg-gallery"
      id="gallery"
      style={{ padding: "120px 0", margin: "90px 0" }}
    >
      <div
        className="section-title position-relative text-center"
        style={{ marginBottom: "120px" }}
      >
        <h6
          className="text-uppercase text-primary mb-3"
          style={{ letterSpacing: "3px" }}
        >
          Antonie de Saint-Exupéry
        </h6>
        <h1 className="font-secondary display-4 text-white">
          “Amar no es mirarse el uno al otro; <br /> es mirar juntos es la misma
          dirección”
        </h1>
        <BsBalloonHeart className="fa-2x text-white" />
      </div>
      <ul
        className="list-group list-group-horizontal mb-4"
        id="portfolio-flters"
      >
        <li>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={GalleryOne} alt="" />
            <a href={GalleryOne} data-lightbox="gallery">
              <FaPlus className="fa-2x text-white" />
            </a>
          </div>
        </li>
        <li>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={GalleryTwo} alt="" />
            <a href={GalleryTwo} data-lightbox="gallery">
              <FaPlus className="fa-2x text-white" />
            </a>
          </div>
        </li>
        <li>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={GalleryThree} alt="" />
            <a href={GalleryThree}>
              <FaPlus className="fa-2x text-white" />
            </a>
          </div>
        </li>
        <li>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={GalleryFour} alt="" />
            <a href={GalleryFour}>
              <FaPlus className="fa-2x text-white" />
            </a>
          </div>
        </li>
        <li>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={GalleryFive} alt="" />
            <a href={GalleryFive} data-lightbox="gallery">
              <FaPlus className="fa-2x text-white" />
            </a>
          </div>
        </li>
        <li>
          <div className="gallery-item">
            <img className="img-fluid w-100" src={GallerySix} alt="" />
            <a href={GallerySix} data-lightbox="gallery">
              <FaPlus className="fa-2x text-white" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default GalleryStart;
