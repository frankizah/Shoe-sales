import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Getproducts = () => {
  // Initialize Hooks
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const img_url = "https://frankizah.pythonanywhere.com/static/images/";

  // Fetch products from API
  const getproducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://frankizah.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setError(""); // Clear error if successful
    } catch (error) {
      setError("There was an error retrieving the products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  // Filter products based on search term
  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // Add product to localStorage cart
  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`Added "${product.product_name}" to cart.`);
  };

  return (
    <div className="container mt-4">
      <ImageCarousel />
      <h3 className="mt-3 text-center text-danger">Available Shoes</h3>

      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Display Loading or Error Messages */}
      {loading && <p className="text-info text-center">Please wait, we are retrieving the products...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* No results message */}
      {!loading && filtered_products.length === 0 && (
        <p className="text-muted text-center">No products found. Please try again later or adjust your search.</p>
      )}

      {/* Products Grid */}
      <div className="row g-4">
        {filtered_products.map((product) => (
          <div key={product.id} className="col-md-3 justify-content-center mb-4">
            <div className="card shadow-sm h-100">
              {/* Use default image if product image is missing */}
              <img
                className="card-img-top p-3"
                src={product.product_photo ? img_url + product.product_photo : "/default-image.jpg"}
                alt={product.product_name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text text-muted">{product.product_description}</p>
                <b className="text-warning">{product.product_cost} KES</b>
                <div className="mt-3">
                  <button
                    className="btn btn-success w-100"
                    onClick={() => navigate("/payment", { state: { product } })}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-outline-danger mt-2 w-100 fw-semibold"
                    onClick={() => addToCart(product)}
                  >
                    <i className="bi bi-cart-plus me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;
