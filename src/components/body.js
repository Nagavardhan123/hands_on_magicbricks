import React from "react";
import bodymain from '../images/bodymain.jpg';
import './body.css';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CardSlider from '../components/slider';
import CardSlider2 from "../components/slider2";
import Paracomp from "./paracomp";
import { Link } from "react-router-dom";
import PopupVideo from '../components/youtube';

const Boody = () => {
    return(
    <>
        <div className="container">
            <div className="row mb-3">
                <h4>An Exclusive Showcase - Bluejay Signature by Bluejay Enterprises Pvt Ltd</h4>
            </div>
            <div className="row mb-3">
                <img src={bodymain} alt="naga_photo"/>
            </div>
            <div className="row mb-3">
                <h4 className="col-md-10">Featured Projects</h4>
                <h6 className="col-md-2 d-flex align-items-center justify-content-center"><Link to="/property2"  className="text-danger">See all Projects &rarr;</Link></h6>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="container-fluid">
                <CardSlider></CardSlider>
                </div>
            </div>
            <div className="row mb-3">
                <h4 className="col-md-10">Popular Owner Properties</h4>
                <h6 className="col-md-2 text-danger d-flex align-items-center justify-content-center">See all Projects &rarr;</h6>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="container-fluid">
                    <CardSlider2></CardSlider2>
                </div>
            </div>
            <div className="row mb-3 coontent d-flex align-items-center justify-content-center pl-5 pt-3 pr-5" style={{height: "400px", borderRadius:"15px"}}>
                <div className="cotainer">
                    <div className="row">
                        <h2 className="text-danger d-flex align-items-center justify-content-center">Magic Homes</h2>
                    </div>
                    <div className="row">
                        <h5 className="text-black d-flex align-items-center justify-content-center">Encyclopedia For All New Projects</h5>
                    </div>
                    <div className="row coontent d-flex align-items-center justify-content-center p-5" style={{borderRadius:"15px"}}>
                        <div className="col-md-3 d-flex align-items-center justify-content-center" style={{backgroundColor:"pink", height: "90px", borderRadius: "15px", marginRight: "15px"}}>
                            <StoreMallDirectoryIcon icon={StoreMallDirectoryIcon} style={{marginLeft: "15px", backgroundColor:"white", margin: "9px", height: "50%", width: "15%", borderRadius: "15px"}}/>
                            <div> Directory for all New Projects</div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center" style={{backgroundColor:"red", height: "90px", borderRadius: "15px", margin: "15px"}}>
                            <StoreMallDirectoryIcon icon={StoreMallDirectoryIcon} style={{marginLeft: "15px", backgroundColor:"white", margin: "9px", height: "50%", width: "15%", borderRadius: "15px"}}/>
                            <div> All Reports from RERA</div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center" style={{backgroundColor:"yellow", height: "90px", borderRadius: "15px"}}>
                            <StoreMallDirectoryIcon icon={StoreMallDirectoryIcon} style={{marginLeft: "15px", backgroundColor:"white", margin: "9px", height: "50%", width: "15%", borderRadius: "15px"}}/>
                            <div>Expert Reviews & Advice</div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="text-white bg-danger d-flex align-items-center justify-content-center border border-none" style={{width:"15%", marginLeft: "43%", borderRadius:"15px"}}>View All New Projects</button>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <h4 className="col-md-10">Your Real Estate Guide</h4>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-4">
                    <div className="card card1 container">
                        <h4 className="row d-flex justify-content-center align-items-center">Locality Videos</h4>
                        <div className="row">
                            <div className="col-md-6 video-container d-flex justify-content-center align-items-center">
                                <PopupVideo videoUrl="https://www.youtube.com/embed/8zI_g-iZ4jQ" />
                            </div>
                            <div className="col-md-6 video-container d-flex justify-content-center align-items-center">
                                <PopupVideo videoUrl="https://www.youtube.com/embed/VIDEO_ID_2" />
                            </div>
                        </div>
                        <div className="row mb-4 p-3">
                            <div className="col-md-6">
                                <div>Locality Review- BTM Layout Bengaluru</div>
                            </div>
                            <div className="col-md-6">
                                <div>Locality Review- Vijaya Nagara Bengaluru</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card2 container">
                        <h4 className="row d-flex justify-content-center align-items-center">Industry Insights</h4>
                        <div className="row">
                            <div>What does RERA carpet area mean and how it is ... </div>
                        </div>
                        <div className="row">
                            <div><hr/></div>
                        </div>
                        <div className="row">
                            <div>What is RENT Agreement - it is a ... </div>
                        </div>
                        <div className="row">
                            <div><hr/></div>
                        </div>
                        <div className="row">
                            <div>Sale DEED: meaning, Format and Components .. </div>
                        </div>
                        <div className="row">
                            <div><hr/></div>
                        </div>
                        <div className="row">
                            <div>Ready Reckoner Rates in Bangalore.. </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card1 container">
                        <h4 className="row d-flex justify-content-center align-items-center">Legal Updates</h4>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <iframe
                                style={{width: "7vw", height: "4vw", borderRadius: "2vw"}}
                                title="Video 1"
                                src="https://www.youtube.com/embed/VIDEO_ID_1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                            <div className="col-md-8">Inheritance Laws in INDIA: All you need to Know</div>
                        </div>
                        <div className="row p-2"><hr/></div>
                        <div className="row p-2">
                            <div className="col-md-4">
                                <iframe
                                style={{width: "7vw", height: "4vw", borderRadius: "2vw"}}
                                title="Video 1"
                                src="https://www.youtube.com/embed/VIDEO_ID_1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                            <div className="col-md-8">Pay BBMP Property TAX online @nagavardhanr11@gmail.com </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <h4 className="col-md-10">Bangalore Property Snapshot</h4>
            </div>
            <div className="container-fluid">
              <Paracomp></Paracomp>
            </div>
        </div>
    </>
    )
}

export default Boody;