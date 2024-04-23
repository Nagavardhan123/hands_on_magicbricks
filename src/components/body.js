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
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';

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
                            <button className="btn btn-primary btt" style={{width:"8vw", height:"2vw", fontSize: "12px"}}>Click me &rarr;</button>
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
                            <button className="btn btn-primary btt" style={{width:"8vw", height:"2vw", fontSize: "12px"}}>Click me &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <h4 className="col-md-10">Popular Owner Properties</h4>
                <h6 className="col-md-2 text-danger d-flex align-items-center justify-content-center">See all Projects &rarr;</h6>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-3">
                    <div className="card zoom-in-image img-fluid" style={{height:"13vw"}}>
                        <img src={pop1} className="card-img-top" alt="pop1"  style={{height: "7vw"}}/>
                        <div className="container" style={{marginLeft:"2vw"}}>
                            <div className="row">2BHK Flat</div>
                            <div className="row">1.25 Cr | 1435 Sqft</div>
                            <div className="row" style={{fontSize:"10px"}}>Thumbara Halli, white field, bangalore</div>
                            <div className="row" style={{fontSize:"12px"}}>Ready to Move</div>
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
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
                            <button className="btn btn-danger btt" style={{width:"6vw", height:"2vw", fontSize: "12px", top:"5vw"}}>Click me &rarr;</button>
                        </div>
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
            <div className="row mb-3">
                <h4 className="col-md-10">Your Real Estate Guide</h4>
            </div>
            <div className="row d-flex justify-content-center align-items-center mb-5">
                <div className="col-md-4">
                    <div className="card card1 container">
                        <h4 className="row d-flex justify-content-center align-items-center">Locality Videos</h4>
                        <div className="row">
                            <div className="col-md-6 video-container d-flex justify-content-center align-items-center">
                                <iframe
                                style={{width: "8vw", height: "6vw", borderRadius: "1vw"}}
                                title="Video 1"
                                src="https://www.youtube.com/embed/VIDEO_ID_1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                            <div className="col-md-6 video-container d-flex justify-content-center align-items-center">
                                <iframe
                                style={{width: "8vw", height: "6vw", borderRadius: "1vw"}}
                                title="Video 2"
                                src="https://www.youtube.com/embed/VIDEO_ID_2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
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
            <div className="border border-black p-3 mb-5" style={{borderRadius: "15px", backgroundColor: "lightcyan"}}>
                <p>
                A home to about 11 million people, Bangalore, now known as Bengaluru, is India''s fourth largest city after Delhi, Kolkata and Mumbai. There is no doubt about the fact that Bangalore unique climate has always attracted people to relocate from all parts of India. The climate in Bangalore is so pleasant and calming that it lets you have a whale of a time. The city has become the 4th largest technology hub in the world after London, Boston and San F....<strong className="text-danger">Read more</strong>
                </p>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="pb-3"><strong>1015+</strong></div>
                            <div>Low Budget Flats <br/>in Bangalore</div>
                        </div>
                        <div className="col-md-3">
                            <div className="pb-3"><strong>49862+</strong></div>
                            <div>Properties for Sale <br/>in Bangalore</div>
                        </div>
                        <div className="col-md-3">
                            <div className="pb-3"><strong>298+</strong></div>
                            <div>Resedential Property Agents <br/>in Bangalore</div>
                        </div>
                        <div className="col-md-3">
                            <div className="pb-3"><strong>31534+</strong></div>
                            <div>Resedential projects <br/>in Bangalore</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Boody;