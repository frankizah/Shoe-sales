import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Frankizah<span className="text-danger">Shoes</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">View Shoes</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addproducts" className="nav-link">Sell Shoes</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/chatbox" className="nav-link">Chatbox</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/cartcontext" className="nav-link">Cart Context</Link></b>
            </li>
          </ul>

          {/* Authorization Links */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <b><Link to="/aboutus" className="nav-link">About us</Link></b>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary me-2">Sign IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign UP</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Floating Chat Button */}
      <Link
        to="/chatbox"
        className="btn btn-danger rounded-circle"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
        }}
        title="Chat with us"
      >
        💬
      </Link>
    </>
  );
};

export default Navbar;
