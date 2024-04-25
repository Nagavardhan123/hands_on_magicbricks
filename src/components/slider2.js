import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import pop1 from '../images/pop1.jpg';
import pop2 from '../images/pop2.jpg';
import pop3 from '../images/pop3.jpg';
import pop4 from '../images/pop4.jpeg';

const CardSlider2 = () => {
  return (
    <Carousel interval={null} controls={true} indicators={true}>
      <Carousel.Item>
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop1} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">2BHK Flat</div>
                            <div className="row">1.25 Cr | 1435 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Thumbara Halli, white field, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt1" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop2} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">3BHK Flat</div>
                            <div className="row">77 Lac | 935 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Medahalli, K R Puram, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop3} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">2BHK Flat</div>
                            <div className="row">55 LAc | 875 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Nalluralli, white field, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div >
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop4} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">3BHK Flat</div>
                            <div className="row">2.25 Cr | 1935 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Koramangala, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"4.5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop1} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">2BHK Flat</div>
                            <div className="row">1.25 Cr | 1435 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Thumbara Halli, white field, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt1" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop2} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">3BHK Flat</div>
                            <div className="row">77 Lac | 935 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Medahalli, K R Puram, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop3} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">2BHK Flat</div>
                            <div className="row">55 LAc | 875 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Nalluralli, white field, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div >
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop4} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">3BHK Flat</div>
                            <div className="row">2.25 Cr | 1935 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Koramangala, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"4.5vw"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
                </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CardSlider2;
