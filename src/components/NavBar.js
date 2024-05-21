import { Link } from 'react-router-dom';
import './navbar.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useCart } from '../screens/CartContent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { state } = useCart();
  const [profileImage, setProfileImage] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
            // Fetch profile image path if user is logged in
            axios.get("http://localhost:5001/profile", { headers: { Authorization: token } })
                .then(response => {
                    console.log(response.data.image)
                    setProfileImage(response.data.image);
                })
                .catch(error => {
                    console.error("Error fetching profile image:", error);
                });
        }
        else{
          setProfileImage('');
        }
    }, []);
    return (<>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid bg-danger">
          <div className='d-flex align-items-center justify-content-left' style={{height: "50px", marginLeft: "100px"}}>
            <Link className="navbar-brand text-lowercase custom-font-size fw-bold text-white" to="/Home" >magicbricks</Link>
            <Link className="nav-link text-white" to="#" style={{marginLeft:"20px", fontSize:"18px"}}>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle border-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bangalore
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "50vw"}}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-9 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-left'>
                          <LocationOnIcon className="col-md-1" icon={LocationOnIcon} style={{backgroundColor:"white", height: "9%", width: "7%"}}/>
                          <div className='col-md-2'>INDIA</div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>Near By cities</div>
                          </div>
                          <div className='row' style={{fontSize: "12px"}}>
                            <div className='col-md-2'>
                              <p>Bangalore -East</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Bangalore -West</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Bangalore -North</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Bangalore -South</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Bangalore -Central</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>Popular Cities</div>
                          </div>
                          <div className='row' style={{fontSize: "12px"}}>
                            <div className='col-md-2'>
                              <p>Ahmedabad</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Bangalore</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Chennai</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Gurgaon</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Hyderabad</p>
                            </div>
                          </div>
                          <div className='row' style={{fontSize: "12px"}}>
                            <div className='col-md-2'>
                              <p>Indore</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Jaipur</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Kolkata</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Lucknow</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Mumbai</p>
                            </div>
                          </div>
                          <div className='row' style={{fontSize: "12px"}}>
                            <div className='col-md-2'>
                              <p>Navi Mumbai</p>
                            </div>
                            <div className='col-md-2'>
                              <p>New Delhi</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Noida</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Pune</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Thane</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>Other Cities</div>
                          </div>
                          <div className='row' style={{fontSize: "12px"}}>
                            <div className='col-md-2'>
                              <p>Agra</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Ahmednagar</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Allahabad</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Aluva</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Amritsar</p>
                            </div>
                          </div>
                          <div className='row' style={{fontSize: "12px"}}>
                            <div className='col-md-2'>
                              <p>Hindupur</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Mangalore</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Kolar</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Chickabalapur</p>
                            </div>
                            <div className='col-md-2'>
                              <p>Sasanakota</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <div className='row'>
                              <h6 className='col-md-12'>International</h6>
                          </div>
                          <div className='row'>
                            <div>&rarr; NRI Home</div>
                          </div>
                          <div className='row'>
                            <div>&rarr; UAE</div>
                          </div>
                          <div className='row'>
                            <div>&rarr; AMERICA</div>
                          </div>
                          <div className='row'>
                            <div>&rarr; UK</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-white d-flex align-items-center justify-content-left" style={{zIndex: 1}}>
            <Link className="nav-link" to="/Home" style={{display: "inline"}}>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle border-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MB Prime
                  </button>
                  <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                    <div className='container-fluid text-white' style={{width: "25vw"}}>
                      <div className='row bg-danger m-2' style={{borderRadius: "10px"}}>
                        <div className='mt-3 d-flex align-items-center justify-content-center'>Introducing MB Prime</div>
                        <div className='mb-3 d-flex align-items-center justify-content-center'>Pay Zero Comission | Save Time & Money</div>
                      </div>
                      <div className='row text-black'>
                        <p className=' d-flex align-items-center justify-content-center'>&#x2714; Contact upto 30 Owners directly</p>
                        <p className=' d-flex align-items-center justify-content-center'>&#x2714; Access to Prime Exclusive Properties</p>
                      </div>
                      <div className='row'>
                        <button className='bg-danger border border-none text-white' style={{borderRadius:"15px"}}>Join Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="nav-link" to="/" style={{marginRight: "30px", display: "inline"}}>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle border-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Logout
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <div className='container-fluid' style={{width: "15vw"}}>
                        <div className='row'>
                          <h6>My Activity</h6>
                        </div>
                        <div className='row' style={{opacity: 0.7}}>
                          <h6>Requested Properties</h6>
                        </div>
                        <div className='row' style={{opacity: 0.7}}>
                          <h6>Contacted Properties</h6>
                        </div>
                        <div className='row' style={{opacity: 0.7}}>
                          <h6>Viewed Properties</h6>
                        </div>
                        <div className='row' style={{opacity: 0.7}}>
                          <h6>Short Listed Properties</h6>
                        </div>
                        <div className='row' style={{opacity: 0.7}}>
                          <h6>Searches</h6>
                        </div>
                        <div className='row d-flex align-items-center justify-content-center'>
                          <Link className='bg-danger w-50' style={{borderRadius:"1vw"}} to='/'> &nbsp;&nbsp;&nbsp;&nbsp;Logut</Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="border p-2" style={{backgroundColor:"white", borderRadius: "20px", display: "inline", zIndex: 0, marginRight: "150px"}}>
              <Link className="nav-link text-black" to="/" style={{display: "inline", opacity: 0.7}}> Post Property <span className="bg-warning" style={{ borderRadius: "1px", fontSize: "10px"}}>FREE</span> </Link>
            </div>
            <div>{profileImage && <img  className="profile-image" src={profileImage} alt="Profile" style={{borderRadius:"50%", height:"45px", width:"45px", marginRight: "50px"}} />}</div>
            <Link className="nav-item nav-link"  to="/Cart">
                        <FontAwesomeIcon  style={{paddingLeft:"0.5vw" }} icon={faShoppingCart} />
                        <span className="badge bg-secondary">{state.items.length}</span>
                    </Link>
          </div>
        </div>
      </nav>
      <div className="container sub_nav d-flex align-items-center justify-content-center" style={{fontSize: "20px", opacity: 0.9}}>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "30px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Buy
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "50vw"}}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-12 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-center font-weight-bold"'>
                            <div className='col-md-3'>Popular Choices</div>
                            <div className='col-md-3'>Property Types</div>
                            <div className='col-md-2'>Budget</div>
                            <div className='col-md-2'>Explore</div>
                            <div className='col-md-2'>Buying Tools</div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left'>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-2'><hr/></div>
                            <div className='col-md-2'><hr/></div>
                            <div className='col-md-2'><hr/></div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left' style={{fontSize: "12px"}}>
                            <div className='col-md-3'>Ready to Moe</div>
                            <div className='col-md-3'>Flats in Bangalore</div>
                            <div className='col-md-2'>Under 50 Lac</div>
                            <div className='col-md-2'>Localities in Bangalore</div>
                            <div className='col-md-2'>Propworth</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "40px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Rent
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "50vw"}}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-12 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-center font-weight-bold"'>
                            <div className='col-md-3'>Popular Choices</div>
                            <div className='col-md-3'>Property Types</div>
                            <div className='col-md-3'>Budget</div>
                            <div className='col-md-3'>Explore</div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left'>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left' style={{fontSize: "12px"}}>
                            <div className='col-md-3'>Ready to Moe</div>
                            <div className='col-md-3'>Flats in Bangalore</div>
                            <div className='col-md-3'>Under 50 Lac</div>
                            <div className='col-md-3'>Localities in Bangalore</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "40px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sell
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "50vw"}}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-12 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-center font-weight-bold"'>
                            <div className='col-md-4'>For Owner</div>
                            <div className='col-md-4'>For Agent & Builder</div>
                            <div className='col-md-4'>Selling Tools</div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left'>
                            <div className='col-md-4'><hr/></div>
                            <div className='col-md-4'><hr/></div>
                            <div className='col-md-4'><hr/></div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left' style={{fontSize: "12px"}}>
                            <div className='col-md-4'><Link to="/Owner" className='text-black'>Post Property <span className="bg-warning p-1" style={{ borderRadius: "7px", fontSize: "8px"}}>FREE</span></Link></div>
                            <div className='col-md-4'>Flats in Bangalore</div>
                            <div className='col-md-4'>Under 50 Lac</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "40px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home Loans
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "50vw"}}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-12 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-center font-weight-bold"'>
                            <div className='col-md-3'>Apply Now</div>
                            <div className='col-md-3'>Partners</div>
                            <div className='col-md-2'>Explore</div>
                            <div className='col-md-2'>EMI Calculators</div>
                            <div className='col-md-2'>Interest Rates</div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left'>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-2'><hr/></div>
                            <div className='col-md-2'><hr/></div>
                            <div className='col-md-2'><hr/></div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left' style={{fontSize: "12px"}}>
                            <div className='col-md-3'>Ready to Moe</div>
                            <div className='col-md-3'>Flats in Bangalore</div>
                            <div className='col-md-2'>Under 50 Lac</div>
                            <div className='col-md-2'>Localities in Bangalore</div>
                            <div className='col-md-2'>Propworth</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "40px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Property Services
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "40vw"}}>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-md-12 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-center font-weight-bold"'>
                            <div className='col-md-4'>Rent Services</div>
                            <div className='col-md-4'>Buy/Sell Services</div>
                            <div className='col-md-4'>Home Services</div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left'>
                            <div className='col-md-4'><hr/></div>
                            <div className='col-md-4'><hr/></div>
                            <div className='col-md-4'><hr/></div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left' style={{fontSize: "12px"}}>
                            <div className='col-md-4'>Ready to Moe</div>
                            <div className='col-md-4'>Flats in Bangalore</div>
                            <div className='col-md-4 text-danger'>View all Services &rarr;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "40px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MB Advice <span style={{backgroundColor: "orange", borderRadius: "2px", fontSize: "10px"}}>NEW</span>
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton" style={{width: "30vw"}}>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-12 container-fluid'>
                          <div className='row d-flex align-items-center justify-content-center font-weight-bold"'>
                            <div className='col-md-3'>MB Research</div>
                            <div className='col-md-3'>Serices and Tools</div>
                            <div className='col-md-3'>Localities & Projects</div>
                            <div className='col-md-3'>News & Blogs</div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left'>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                            <div className='col-md-3'><hr/></div>
                          </div>
                          <div className='row d-flex align-items-center justify-content-left' style={{fontSize: "12px"}}>
                            <div className='col-md-3'>Ready to Move</div>
                            <div className='col-md-3'>Flats in Bangalore</div>
                            <div className='col-md-3'>Under 50 Lac</div>
                            <div className='col-md-3'>Localities in Bangalore</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link className="nav-link d-inline" to="/" style={{marginRight: "10px", marginLeft: "40px"}}>
          <div className="container">
                <div className="dropdown">
                  <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Help
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Help Center</a>
                    <a className="dropdown-item" href="/">Sales Enquiry</a>
                  </div>
                </div>
              </div>
        </Link>
      </div>
      <hr/>
      </>
  );
};

export default Navbar;





