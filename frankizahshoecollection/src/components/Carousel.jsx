import { Link } from "react-router-dom";

const ImageCarousel = () => {
  return (
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/shoe1.jpg" alt="Jordan 8" className="d-block w-100" height="300px" />
            </div>

            <div className="carousel-item">
              <img src="images/shoe2.jpg" alt="Adidas Campus" className="d-block w-100" height="300px" />
            </div>

            <div className="carousel-item">
              <img src="images/shoe3.jpg" alt="Samba Sneakers" className="d-block w-100" height="300px" />
            </div>

            <div className="carousel-item">
              <img src="images/shoe4.jpg" alt="Nike Air Force 1" className="d-block w-100" height="300px" />
            </div>
          </div>

          {/* Previous & Next Buttons */}
          <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </Link>

          <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </Link>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
