const Footer = () => {
  return (
    <footer className="footer-container text-center">
      <section className="row mt-4 footer-background-color p-4 d-flex justify-content-center align-items-center">

        {/* About Us Section */}
        <article className="col-md-4 text-light">
          <h5 className="p-2 text-info">About Us</h5>
          <p>
            We provide the best quality shoes at affordable prices. Shop with us for stylish,
            comfortable, and durable footwear.
          </p>
        </article>

        {/* Contact Us Section */}
        <article className="col-md-4 text-light">
          <h5 className="p-2 text-info">Reach Us Out</h5>
          <form>
            <div className="mb-2">
              <label htmlFor="email" className="form-label visually-hidden">Email</label>
              <input
                id="email"
                className="form-control text-center"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="comment" className="form-label visually-hidden">Comment</label>
              <textarea
                id="comment"
                className="form-control text-center"
                rows="4"
                placeholder="Leave a comment"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </article>

        {/* Social Media Section */}
        <article className="col-md-4 text-light">
          <h4 className="text-info">Connect With Us</h4>
          <div className="d-flex justify-content-center my-2">
            <a href="https://facebook.com" className="mx-1" aria-label="Facebook">
              <img src="images/facebook.png" alt="Facebook logo" className="socialspictures" />
            </a>
            <a href="https://instagram.com" className="mx-1" aria-label="Instagram">
              <img src="images/ig.jfif" alt="Instagram logo" className="socialspictures" />
            </a>
            <a href="https://twitter.com" className="mx-1" aria-label="X (formerly Twitter)">
              <img src="images/x.png" alt="X (formerly Twitter) logo" className="socialspictures" />
            </a>
          </div>
          <video
            src="videos/secondvideo.mp4"
            autoPlay
            muted
            loop
            className="w-100 mt-4"
            poster="images/video-placeholder.jpg"
          >
            Your browser does not support the video tag.
          </video>
          <p className="text-light mt-2">
            Follow us on social media for the latest shoe trends, offers, and exclusive deals.
          </p>
        </article>
      </section>

      {/* Copyright */}
      <div className="text-white text-center p-3 mt-2 bottom-footer">
        <h5>Developed by Frank Omolo &copy; 2025. All rights reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
