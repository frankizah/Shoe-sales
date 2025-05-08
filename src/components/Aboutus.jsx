import Footer from './Footer';

const Aboutus = () => {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-danger text-center mb-4">About Us</h1>

      <div className="row justify-content-center">
        {/* Team Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="card shadow p-4">
          <video
      src="videos/video1.mp4"
      autoPlay
      muted
      loop
      className="w-100"
    ></video>
          </div>
        </div>

        {/* Team Details */}
        <div className="col-md-6 text-start">
          <h2 className="text-success">Our Team:</h2>
          <ul className="list-unstyled">
            <li><strong>Michael Omollo</strong>: CEO</li>
            <li><strong>Josephine Elime</strong>: COO</li>
            <li><strong>Elizabeth Akinyi</strong>: Member</li>
            <li><strong>Kateri Amelia</strong>: Member</li>
          </ul>
          <p>
            Frankizah Shoes is powered by a passionate team dedicated to
            providing you with the best in style, comfort, and customer service. 
            Our mission is to deliver quality footwear for every occasion.
          </p>

          <h3 className="text-primary">Serving over 1200+ satisfied customers with 30+ shoe styles!</h3>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Aboutus;
