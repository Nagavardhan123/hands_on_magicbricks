import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import body1 from '../images/body1.jpg';
import body2 from '../images/body2.jpg';
import body3 from '../images/body3.jpg';
import body4 from '../images/body4.jpg';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import { useCart } from '../screens/CartContent';

const CardSlider = () => {
    const { addToCart } = useCart();

    const handleAddToCart = ({body1}) => {
        addToCart({body1});
    };
  return (
    <Carousel interval={null} controls={true} indicators={true}>
      <Carousel.Item>
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-6" style={{borderRadius: "20px"}}>
                    <div className="card zoom-in-image img-fluid" style={{height:"21vw"}}>
                        <img src={body1} className="card-img-top" alt="image1" />
                        <div className="d-flex justify-content-center align-items-center">
                            <MapsHomeWorkIcon icon={MapsHomeWorkIcon} style={{backgroundColor:"white", margin: "9px", height: "30%", width: "15%", borderRadius: "15px"}}/>
                            <div style={{margin: "2vw"}}>
                                <h6>DSR hignland greenz</h6>
                                <p style={{fontSize: "8px"}}>by DSR Infrastructure private Ltd sarjapura road, bangalore</p>
                            </div>
                            <div>
                                <p>2, 3 BHK Flats <br/>81.7 lac onwards</p>
                            </div>
                            <button className="btn btn-primary btt1" style={{width:"8vw", height:"2vw", fontSize: "12px"}}><Link to="/card1" >Click me &rarr;</Link></button>
                            <button onClick={() => handleAddToCart({body1})} className="btn btn-secondary" style={{width:"6vw", height:"2vw", fontSize: "8px"}}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="card zoom-in-image img-fluid" style={{height:"21vw"}}>
                    <img src={body2} className="card-img-top" alt="image1" />
                        <div className="d-flex justify-content-center align-items-center">
                            <EmojiTransportationIcon icon={EmojiTransportationIcon} style={{backgroundColor:"white", margin: "9px", height: "30%", width: "15%", borderRadius: "15px"}}/>
                            <div style={{margin: "2vw"}}>
                                <h6>Folium By Sumadhura PHASE II</h6>
                                <p style={{fontSize: "8px"}}>by SUMADURA Infrcron private limited, white field, Bangalore</p>
                            </div>
                            <div>
                                <p>2, 3 BHK Flats <br/>81.7 lac onwards</p>
                            </div> 
                            <button className="btn btn-primary btt" style={{width:"8vw", height:"2vw", fontSize: "12px"}}><Link to="/card2" >Click me &rarr;</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container'>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-6" style={{borderRadius: "20px"}}>
                    <div className="card zoom-in-image img-fluid" style={{height:"21vw"}}>
                        <img src={body3} className="card-img-top" alt="image1" />
                        <div className="d-flex justify-content-center align-items-center">
                            <MapsHomeWorkIcon icon={MapsHomeWorkIcon} style={{backgroundColor:"white", margin: "9px", height: "30%", width: "15%", borderRadius: "15px"}}/>
                            <div style={{margin: "2vw"}}>
                                <h6>Abhee Riveria Royalee</h6>
                                <p style={{fontSize: "8px"}}>by Abhee ventures HSR layout, Bengaluru</p>
                            </div>
                            <div>
                                <p>2, 3 BHK Flats <br/>81.7 lac onwards</p>
                            </div>
                            <button className="btn btn-primary btt1" style={{width:"8vw", height:"2vw", fontSize: "12px"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="card zoom-in-image img-fluid" style={{height:"21vw"}}>
                    <img src={body4} className="card-img-top" alt="image1" />
                        <div className="d-flex justify-content-center align-items-center">
                            <EmojiTransportationIcon icon={EmojiTransportationIcon} style={{backgroundColor:"white", margin: "9px", height: "30%", width: "15%", borderRadius: "15px"}}/>
                            <div style={{margin: "2vw"}}>
                                <h6>Abhee Pride</h6>
                                <p style={{fontSize: "8px"}}>by Abhee ventures Katamanalluru, Bengaluru</p>
                            </div>
                            <div>
                                <p>2, 3 BHK Flats <br/>81.7 lac onwards</p>
                            </div> 
                            <button className="btn btn-primary btt" style={{width:"8vw", height:"2vw", fontSize: "12px"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CardSlider;
