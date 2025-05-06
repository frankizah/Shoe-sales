import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div
          id="shoeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* F95F-BCF2 */}
          {/* Carousel Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/shoe1.jpg"
                alt="Jordan 8"
                className="d-block w-100"
                height="400px"
              />
            </div>

            <div className="carousel-item">
              <img
                src="images/shoe2.jpg"
                alt="Adidas Campus"
                className="d-block w-100"
                height="400px"
              />
            </div>

            <div className="carousel-item">
              <img
                src="images/shoe3.jpg"
                alt="Samba Sneakers"
                className="d-block w-100"
                height="400px"
              />
            </div>

            <div className="carousel-item">
              <img
                src="images/shoe4.jpg"
                alt="Nike Air Force 1"
                className="d-block w-100"
                height="400px"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#shoeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#shoeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
