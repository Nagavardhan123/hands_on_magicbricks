import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedin, faFacebook, faTwitter, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer" style={{backgroundColor: 'lightgray'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className='mt-5'>About Magicbricks</h5>
                        <p>
                            Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.
                        </p>
                        <h5 className='mt-5'>More from our Network</h5>
                        <div className='container-fluid'>
                            <div className='row  d-inline'>
                                <Link className="foo-link d-inline text-black" to="/">Times of India</Link>
                                <Link className="foo-link d-inline text-black" to="/">Economic Times</Link>
                                <Link className="foo-link d-inline text-black" to="/">Navbharat times</Link>
                                <Link className="foo-link d-inline text-black" to="/">IndiaTimes</Link>
                                <Link className="foo-link d-inline text-black" to="/">Filmfare</Link>
                            </div>
                        </div>
                        <div className='container-fluid'>
                            <div className='row  d-inline'>
                                <Link className="foo-link d-inline text-black" to="/">MensXp</Link>
                                <Link className="foo-link d-inline text-black" to="/" >iDiva</Link>
                                <Link className="foo-link d-inline text-black" to="/">TimesJobs</Link>
                                <Link className="foo-link d-inline text-black" to="/">Gadgets Now</Link>
                            </div>
                        </div>     
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5>Properties in India</h5>
                        <p>Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</p>
                        <h5 className='mt-5'>New Projects in India</h5>
                        <p>New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <FontAwesomeIcon icon={faFacebook} style={{marginLeft: "15px"}}/>
                        <FontAwesomeIcon icon={faTwitter} style={{marginLeft: "15px"}}/>
                        <FontAwesomeIcon icon={faLinkedin} style={{marginLeft: "15px"}}/>
                        <FontAwesomeIcon icon={faYoutube} style={{marginLeft: "15px"}}/>
                        <FontAwesomeIcon icon={faInstagram} style={{marginLeft: "15px"}}/>
                    </div>
                    <div className='col-md-1'>
                        <FontAwesomeIcon icon={faGooglePlay}/>
                    </div>
                    <div className='col-md-1'>
                        <FontAwesomeIcon icon={faAppStore}/>
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    );
}

export default Footer;




// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">