import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://frankizah.pythonanywhere.com/api/signin",
        data
      );

      setLoading(false);

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setSuccess("Login successful!");
        navigate("/");
      } else {
        setError(response.data.Message || "Incorrect email or password.");
      }
    } catch (err) {
      setLoading(false);
      setError(err?.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
          <h2 className="mb-3">Sign In</h2>

          {loading && <div className="alert alert-info">Logging in...</div>}
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={submit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="form-control mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-success w-100">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
