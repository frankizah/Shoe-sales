const ImageCarousel = () => {
  return (
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/images.24.jpeg" alt="Slide 1" className="d-block w-100" height="400px" />
            </div>
            <div className="carousel-item">
              <img src="images/images.23.jpeg" alt="Slide 2" className="d-block w-100" height="400px" />
            </div>
            <div className="carousel-item">
              <img src="images/images.25.jpeg" alt="Slide 3" className="d-block w-100" height="400px" />
            </div>
            <div className="carousel-item">
              <img src="images/images.26.jpeg" alt="Slide 4" className="d-block w-100" height="400px" />
            </div>
          </div>

          {/* Controls */}
          <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a href="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
