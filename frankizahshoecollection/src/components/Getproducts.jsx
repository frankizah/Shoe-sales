import { useState, useEffect } from "react"; // for state management
import axios from "axios"; //For API Access
import { Link, useNavigate } from "react-router-dom"; // For link to other component
import Footer from "./Footer";
import ImageCarousel from "./Carousel";

const Getproducts = () => {

    // Initialize Hooks
    const [products, setProducts] = useState([]);  // Default to empty array instead of a string
    const [loading, setLoading] = useState(""); //For loading message
    const [error, setError] = useState(""); //error message hook

    const navigate = useNavigate();
    
    //Specify image location URL
    const img_url = "https://frankizah.pythonanywhere.com/static/images/"
    
    const getproducts = async()=>{
        setLoading("Please wait, We are retrieving the products .."); // Set loading message when fetching starts
        try {
        const response = await axios.get("https://frankizah.pythonanywhere.com/api/getproducts")
        setProducts(response.data)
        console.log(response.data)
        setLoading("")
        }
        catch(error){
            setLoading("")
            setError("There was an Error")    
        }
    }//end function

    // Call getproducts on Use Effect
    useEffect(() => {
       getproducts()
    }, []); // empty dependency array ensures this runs only once when the component mounts

    return (
        
   
        <div className="container mt-4">
        <h3 className="mt-3 text-center text-danger">Available Shoes</h3>
      
        {/* Display Loading or Error Messages */}
        {loading && <p className="text-info text-center">{loading}</p>}
        {error && <p className="text-danger text-center">{error}</p>}
      
        {/* Grid Layout with 4 Products Per Row */}
        <div className="row g-4"> {/* Bootstrap grid with gap */}
          {products.map((product) => (
            <div key={product.id} className="col-md-3 justify-content-center mb-4"> {/* 4 columns per row */}
              <div className="card shadow-sm h-100"> {/* Ensures equal height cards */}
                <img
                  className="card-img-top p-3"
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  style={{ height: "200px", objectFit: "cover" }} // Adjust image size
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text text-muted">{product.product_description}</p>
                  <b className="text-warning">{product.product_cost} KES</b>
                  <div className="mt-3">
                    <button
                      className="btn btn-success w-100"
                      onClick={() => navigate("/makepayment", { state: { product } })}
                    >
                      Buy Now
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
}

export default Getproducts;