import { BsBalloonHeart } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import GalleryOne from "../assets/gallery-1.jpg";
import GalleryTwo from "../assets/gallery-2.jpg";
import GalleryThree from "../assets/gallery-3.jpg";
import GalleryFour from "../assets/gallery-4.jpg";
import GalleryFive from "../assets/gallery-5.jpg";
import GallerySix from "../assets/gallery-6.jpg";

function GalleryStart() {
  const imageItems = [
    {
      src: GalleryOne,
      alt: "Image 1",
    },
    {
      src: GalleryTwo,
      alt: "Image 2",
    },
    {
      src: GalleryThree,
      alt: "Image 3",
    },
    {
      src: GalleryFour,
      alt: "Image 4",
    },
    {
      src: GalleryFive,
      alt: "Image 5",
    },
    {
      src: GallerySix,
      alt: "Image 6",
    },
  ];

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
        <h1 className="font-secondary display-4 text-white">
          “Amar no es mirarse el uno al otro; <br /> es mirar juntos en la misma
          direccion”
        </h1>
        <h6
          className="text-uppercase text-white mb-3"
          style={{ letterSpacing: "2px" }}
        >
          Antonie de Saint-Exupéry
        </h6>
        <BsBalloonHeart className="fa-2x text-white" />
      </div>
      <div className="d-none d-md-block">
        <ul className="list-group list-group-horizontal mb-4">
          {imageItems.map((item, index) => (
            <li key={index}>
              <div className="gallery-item">
                <img
                  className="img-fluid w-100"
                  src={item.src}
                  alt={item.alt}
                />
                <a data-lightbox="gallery">
                  <FaPlus className="fa-2x text-white" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ul className="d-block d-md-none list-group mb-4">
        {imageItems.map((item, index) => (
          <li key={index}>
            <div className="gallery-item">
              <img className="img-fluid w-100" src={item.src} alt={item.alt} />
              <a data-lightbox="gallery">
                <FaPlus className="fa-2x text-white" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GalleryStart;
