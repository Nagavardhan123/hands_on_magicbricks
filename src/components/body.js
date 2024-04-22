import React from "react";
import bodymain from '../images/bodymain.jpg';
import body1 from '../images/body1.jpg';
import body2 from '../images/body2.jpg';
import pop1 from '../images/pop1.jpg';
import pop2 from '../images/pop2.jpg';
import pop3 from '../images/pop3.jpg';
import pop4 from '../images/pop4.jpeg';
import './body.css';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

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
                <h6 className="col-md-2 text-danger d-flex align-items-center justify-content-center">See all Projects &rarr;</h6>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-6" style={{borderRadius: "20px"}}>
                <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={body1} alt="image1"/>
                    <div>

                    </div>
                </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={body2} alt="image1"/>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <h4 className="col-md-10">Popular Owner Properties</h4>
                <h6 className="col-md-2 text-danger d-flex align-items-center justify-content-center">See all Projects &rarr;</h6>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-3">
                <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={pop1} alt="image1"/>
                    <div>
                </div>
                </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop2} alt="image1"/>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={pop3} alt="image1"/>
                    <div>
                 </div>
                </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop4} alt="image1"/>
                    </div>
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
        </div>
    </>
    )
}

export default Boody;