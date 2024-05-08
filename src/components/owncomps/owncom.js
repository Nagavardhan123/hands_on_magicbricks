import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Owncom() {
    return(
        <>
        <div className="container">
            <form className="mx-1 mx-md-4">
                <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                </div>
                <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill">
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        <input type="email" id="form3Example3c" className="form-control" />
                        
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill">
                        <input type="password" id="form3Example4c" className="form-control" />
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill">
                        <input type="file" value="" id="form2Example3c" className="form-control"/>
                        <label className="form-check-label" htmlFor="form2Example3">
                        Upload Image
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-2 mb-4 mb-lg-2">
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Owncom;