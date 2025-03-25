import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Getproducts from "./components/Getproducts";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Addproducts from "./components/Addproducts";
import "./App.css"; // Ensure styles are imported

function App() {
  return (
    <Router>
      <div className="App backstyling">
        {/* Header Section */}
        <header className="App-header">
          <h1>Frankizah Shoe Collection</h1>
          <p>Your one-stop shop for quality footwear!</p>
        </header>

        {/* Navigation Bar */}
        <Navbar />

        {/* Routes for Different Pages */}
        <Routes>
          <Route path="/" element={<Getproducts />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproducts" element={<Addproducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;