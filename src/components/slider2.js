import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import pop1 from '../images/pop1.jpg';
import pop2 from '../images/pop2.jpg';
import pop3 from '../images/pop3.jpg';
import pop4 from '../images/pop4.jpeg';
import './slider2.css';

const CardSlider2 = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    };
    
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop1} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">2BHK Flat</div>
                <div className="row">1.25 Cr | 1435 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Thumbara Halli, white field, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt1" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}><Link to='/property1/property1card2'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop2} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">3BHK Flat</div>
                <div className="row">77 Lac | 935 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Medahalli, K R Puram, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}><Link to='/property2/property2card1'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop3} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">2BHK Flat</div>
                <div className="row">55 LAc | 875 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Nalluralli, white field, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}><Link to='/property1/property1card1'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop4} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">3BHK Flat</div>
                <div className="row">2.25 Cr | 1935 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Koramangala, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"4.5vw"}}><Link to='/property2/property2card1'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop1} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">2BHK Flat</div>
                <div className="row">1.25 Cr | 1435 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Thumbara Halli, white field, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt1" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}><Link to='/property1/property1card2'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop2} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">3BHK Flat</div>
                <div className="row">77 Lac | 935 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Medahalli, K R Puram, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}><Link to='/property2/property2card1'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop3} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">2BHK Flat</div>
                <div className="row">55 LAc | 875 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Nalluralli, white field, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}><Link to='/property1/property1card2'>Click me &rarr;</Link></button>
            </div>
        </div>
        <div className="card zoom-in-image img-fluid p-3 border border-white" style={{height:"13vw"}}>
            <img src={pop4} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
            <div className="container" style={{marginLeft:"2vw"}}>
                <div className="row">3BHK Flat</div>
                <div className="row">2.25 Cr | 1935 Sqft</div>
                <div className="row" style={{fontSize:"10px"}}>Koramangala, bangalore</div>
                <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"4.5vw"}}><Link to='/property1/property1card1'>Click me &rarr;</Link></button>
            </div>
        </div>
      </Slider>
    </div>
  );
}

export default CardSlider2;