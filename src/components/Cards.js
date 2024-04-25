import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cards.css';
import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";

const Cards = () => {
  return (<>
  <div>
    <h2 className="text-left" style={{marginLeft: "8%"}}>We've got properties in Bangalore for everyone</h2>
    <div className="container mt-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-3" style={{borderRadius: "20px"}}>
          <div className="card" style={{height:"200px"}}>
            <img className="zoom-in-image img-fluid" src={image1} alt="image1"/>
            <div class="overlay-content text-with-shadow">
              <p>26709</p>
              <p>Owner Properties</p>
              <Link to="/property1" >Explore &rarr;</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
            <div className="card" style={{height:"200px"}}>
                <img className="zoom-in-image" src={image2} alt="image1"/>
                <div class="overlay-content text-with-shadow">
                  <p>998</p>
                  <p>Projects</p>
                  <Link to="/property2" >Explore &rarr;</Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" style={{height:"200px"}}>
                <img className="zoom-in-image" src={image3} alt="image1"/>
                <div class="overlay-content text-with-shadow">
                  <p>21792</p>
                  <p>Ready to move-in</p>
                  <Link to="/property3" >Explore &rarr;</Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card" style={{height:"200px"}}>
                <img className="zoom-in-image" src={image4} alt="image1"/>
                <div class="overlay-content text-with-shadow">
                  <p>1262</p>
                  <p>26709 Owner Properties</p>
                  <a href="/" >Explore &rarr;</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    <hr className="bt-5" style={{height:"8px"}}/>
  </>  
  )
}

export default Cards;