import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/forgot-password", { email })
      .then(result => {
        setSuccessMessage("Password reset email sent successfully.");
        navigate('/')
      })
      .catch(error => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  }

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>
                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                    {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label">Email address</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-primary btn-lg" type="submit">Reset Password</button>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p><Link to="/"><button className="btn btn-primary btn-lg" type="submit">Back to Login</button></Link></p>
                        <p><Link to="/register"><button className="btn btn-primary btn-lg" type="submit">Register</button></Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
