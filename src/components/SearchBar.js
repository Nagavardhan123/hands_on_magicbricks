import { Link } from 'react-router-dom';
import './searchbar.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './caros.css';
import carimage1 from '../images/carimage1.png';
import carimage2 from '../images/carimage2.png';
import carimage3 from '../images/carimage3.png';
import carimage4 from '../images/carimage4.png';

const SearchBar = () => {
    return (
    <>
    <div className='container d-flex align-items-center justify-content-center'>
        <div className='row'>
            <div className='col-md-11 container-fluid'>
                <h2 className='row justify-content-center m-5'>Find a Home you'll love</h2>
                <div className='row d-flex'>
                    <div className="container d-flex align-items-center justify-content-center mb-3">
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    Buy
                                </button>
                            </div>
                        </Link>
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    Rent
                                </button>
                            </div>
                        </Link>
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    New Projects
                                </button>
                            </div>
                        </Link>
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    PG
                                </button>
                            </div>
                        </Link>
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    Plots
                                </button>
                            </div>
                        </Link>
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    Commercial
                                </button>
                            </div>
                        </Link>
                        <Link className="nav-link d-inline" to="/">
                            <div className="container">
                                <button className="btn btn-white hover-underline" type="button" style={{fontSize: "12px"}}>
                                    Post Free Property Ad
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className="container d-flex align-items-center justify-content-center mb-5" id='searchh'>
                        <div className="row border border-dark align-items-center justify-content-center" style={{borderRadius: "30px", height: "60px", paddingRight: "9px"}}>
                            <div className="col-sm-3">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Place"
                                />
                            </div>
                            <div className="col-sm-3">
                                <input
                                    type="number"
                                    className="form-control border-0"
                                    placeholder="Number"
                                />
                            </div>
                            <div className="col-sm-4">
                                <input
                                    type="number"
                                    className="form-control border-0"
                                    placeholder="Budget"
                                />
                            </div>
                            <div className="col-sm-2" style={{backgroundColor: "red", borderRadius: "15px", paddingLeft: "30px"}}>
                                <button className="btn text-white">Search</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='corona col-md-3' style={{zIndex: -1}}>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carimage1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carimage2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carimage3}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carimage4}
            alt="Fourth slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
    </div>
    </>
    );
}

export default SearchBar;