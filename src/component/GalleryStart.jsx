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
        <i className="far fa-heart text-white"></i>
      </div>
      <div className="owl-carousel gallery-carousel">
        <div className="gallery-item">
          <img className="img-fluid w-100" src={GalleryOne} alt="" />
          <a href={GalleryOne} data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>
        <div className="gallery-item">
          <img className="img-fluid w-100" src={GalleryTwo} alt="" />
          <a href={GalleryTwo} data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>
        <div className="gallery-item">
          <img className="img-fluid w-100" src={GalleryThree} alt="" />
          <a href={GalleryThree} data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>
        <div className="gallery-item">
          <img className="img-fluid w-100" src={GalleryFour} alt="" />
          <a href={GalleryFour} data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>
        <div className="gallery-item">
          <img className="img-fluid w-100" src={GalleryFive} alt="" />
          <a href={GalleryFive} data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>
        <div className="gallery-item">
          <img className="img-fluid w-100" src={GallerySix} alt="" />
          <a href={GallerySix} data-lightbox="gallery">
            <i className="fa fa-2x fa-plus text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GalleryStart;
