import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import body1 from '../../images/body1.jpg';
import body2 from '../../images/body2.jpg';
import body3 from '../../images/body3.jpg';
import body4 from '../../images/body4.jpg';
import ChairIcon from '@mui/icons-material/Chair';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DescriptionIcon from '@mui/icons-material/Description';

function P2c1() {
  return (<>
            <div className="container bg-light">
                <div className="row">
                    <div className="col-md-9">
                    <div className="container ml-5 border border-black p-3" style={{borderRadius:"10px", marginBottom:"8vw"}}>
                <div className="row">
                    <p><strong className="text-size-20">₹ 39 Lac</strong> EMI ₹ 18K | <a>Need Home Loan? Check Eligibility</a></p>
                    <p>2 BHK Flat For Sale in Janapriya Greenwood, <a><strong>Chikkabanavara, Bangalore</strong></a></p>
                </div>
                <div className="row">
                <div className="col-md-4 container-fluid">
                        <div className="row mb-1" style={{ height: "17vw" }}>
                            <img src={body1} alt="pop1" className="img-fluid" />
                        </div>
                        <div className="row" style={{ height: "6vw" }}>
                            <div className="col-md-4">
                                <img src={body2} alt="pop2" className="img-fluid h-100" />
                            </div>
                            <div className="col-md-4">
                                <img src={body3} alt="pop3" className="img-fluid h-100" />
                            </div>
                            <div className="col-md-4">
                                <img src={body4} alt="pop4" className="img-fluid h-100" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 container-fluid">
                        <div className="row mb-5 pt-2 pl-2" style={{backgroundColor:"silver", borderRadius:"1vw"}}>
                            <p><ChairIcon/>2Beds &nbsp;&nbsp;|&nbsp;&nbsp; <BathtubIcon/>2Baths  &nbsp;&nbsp;|&nbsp;&nbsp; <BalconyIcon/>1Balcony  &nbsp;&nbsp;|&nbsp;&nbsp; <DirectionsCarIcon/>1 Covered Parking</p>
                        </div>
                        <div className="row m-5">
                            <div className="col-md-4">
                                <strong>Carpet Area</strong>
                                <span className="d-block">1065 feet</span>
                                <p>₹ 3662 sq/ft</p>
                            </div>
                            <div className="col-md-4">
                                <strong>Developers</strong>
                                <span className="d-block">JANA PRIYA Engineers Syndicate</span>
                            </div>
                            <div className="col-md-4">
                                <strong>Project</strong>
                                <span className="d-block">Jana Priya Greenwood</span>
                            </div>
                        </div>
                        <div className="row m-5">
                            <div className="col-md-4">
                                <span className="d-block">Floor</span>
                                <strong>3 out of 4 floors</strong>
                            </div>
                            <div className="col-md-4">
                                <span className="d-block">Transaction Type</span>
                                <strong>Re Sale</strong>
                            </div>
                            <div className="col-md-4">
                                <span className="d-block">Status</span>
                                <strong>Ready to Move</strong>
                            </div>
                        </div>
                        <div className="row m-5">
                            <div className="col-md-4">
                                <span className="d-block">Facing</span>
                                <strong>East</strong>
                            </div>
                            <div className="col-md-4">
                                <span className="d-block">lift</span>
                                <strong>1</strong>
                            </div>
                            <div className="col-md-4">
                                <span className="d-block">Furnished</span>
                                <strong>Semi Furnished</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-3">
                        <button className="bg-danger border border-none text-white" style={{borderRadius:"10vw", height:"2.5vw", width:"12vw"}}>Contact owner</button>
                    </div>
                    <div className="col-md-4">
                        <button className="bg-white border border-danger text-black" style={{borderRadius:"10vw", height:"2.5vw", width:"12vw"}}>Book Visit <span style={{backgroundColor:"yellow", fontSize:"10px"}}>free cab</span></button>
                    </div>
                </div>
            </div>
            <div className="container border border-black bg-light p-5" style={{borderRadius:"1vw"}}>
                <h2>Why buy in this project?</h2>
                <ul>
                    <li>Hustle and Bustle of Bengaluru 16km</li>
                    <li>Chikkabanawara Railway Station 5km</li>
                </ul>
            </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-light p-3 border border-black mb-3" style={{borderRadius:"1vw"}}>
                            <h2>Contact owner</h2>
                            <p>Anil V Kamat +91-93XXXXXXXX</p>
                            <button className="bg-danger border border-none text-white" style={{borderRadius:"10vw", height:"2.5vw", width:"12vw"}}>Book Visit</button>
                        </div>
                        <div className="bg-light border border-black mb-3 d-flex justify-content-center pt-3" style={{borderRadius:"1vw"}}>
                            <p style={{fontSize:'1vw'}}><DescriptionIcon/> Download Brochure</p>
                        </div>
                    </div>
                </div>
            </div>
          </>);
  }

export default P2c1;