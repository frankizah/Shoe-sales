const Footer = () => {
    return (
      <div className="footer-container text-center">
        <section className="row mt-4 footer-background-color p-4 d-flex justify-content-center align-items-center">
          {/* About Us Section */}
          <div className="col-md-4 text-light">
            <h5 className="p-2 text-info">About Us</h5>
            <p>We provide the best quality shoes at affordable prices. Shop with us for stylish, comfortable, and durable footwear.</p>
          </div>
  
          {/* Contact Us Section */}
          <div className="col-md-4 text-light">
            <h5 className="p-2 text-info">Reach Us Out</h5>
            <input className="form-control text-center" type="email" placeholder="Enter your email" />
            <br />
            <textarea className="form-control text-center" rows="4" placeholder="Leave a comment"></textarea>
            <br />
            <button className="btn btn-primary w-100">Send Message</button>
          </div>
  
          {/* Social Media Section */}
          <div className="col-md-4 text-light">
            <h4 className="text-info">Connect With Us</h4>
            <br />
        
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" className="mx-2">
                <img src="images/facebook.png" alt="Facebook" className="socialspictures" />
              </a>
              <a href="https://instagram.com" className="mx-2">
                <img src="images/ig.jfif" alt="Instagram" className="socialspictures" />
              </a>
              <a href="https://instagram.com" className="mx-2">
                <img src="images/x.png" alt="twitter" className="socialspictures" />
              </a>
              <video
               src="videos/secondvideo.mp4"
               autoPlay
               muted
               loop
               className="w-100 mt-4"
              ></video> 
            </div>
            <p className="text-light mt-2">Follow us on social media for the latest shoe trends, offers, and exclusive deals.</p>
          </div>
        </section>
  
        {/* Copyright Footer */}
        <footer className="text-white text-center p-3 mt-2 bottom-footer">
          <h5>Developed by Frank Omolo &copy; 2025. All rights reserved.</h5>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  