import Navbar from '../NavBar';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import image2 from "../../images/image2.webp";
import pop9 from '../../images/property2/pop9.jpeg';
import pop10 from '../../images/property2/pop10.jpeg';
import pop11 from '../../images/property2/pop11.jpeg';
import pop12 from '../../images/property2/pop12.jpeg';
import pop13 from '../../images/property2/pop13.jpeg';
import pop14 from '../../images/property2/pop14.jpeg';
import pop15 from '../../images/property2/pop15.jpeg';
import pop16 from '../../images/property2/pop16.jpeg';

function S2() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <div className="container-fluid d-flex">
              <SearchBar></SearchBar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Welcome to Project page</h1>
            <div className="card mb-5" style={{height:"40%", width:"70%", marginLeft:"15%"}}>
              <img src={image2} alt="image2"/>
            </div>
            <div className="container mt-4 mb-5">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3" style={{borderRadius: "20px"}}>
                  <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={pop9} alt="pop9"/>
                    <div class="overlay-content text-with-shadow">
                      <p>CHOICE 1</p>
                      <p>Medahalli</p>
                      <Link to="/property2/property2card1" >click me &rarr;</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image" src={pop10} alt="pop10"/>
                    <div class="overlay-content text-with-shadow">
                      <p>CHOICE 2</p>
                      <p>Whitefield</p>
                      <Link to="/property1/property1card2" >click me &rarr;</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                      <img className="zoom-in-image" src={pop11} alt="pop11"/>
                      <div class="overlay-content text-with-shadow">
                        <p>CHOICE 3</p>
                        <p>Marathahalli</p>
                        <Link to="/property1/property1card2" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop12} alt="pop12"/>
                        <div class="overlay-content text-with-shadow">
                          <p>CHOICE 4</p>
                          <p>Deepanjali Nagar</p>
                          <Link to="/property2/property2card1" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3" style={{borderRadius: "20px"}}>
                  <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={pop13} alt="pop13"/>
                    <div class="overlay-content text-with-shadow">
                        <p>CHOICE 5</p>
                        <p>R T Nagara</p>
                        <Link to="/property1/property1card2" >click me &rarr;</Link>
                      </div>
                  </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop14} alt="pop14"/>
                        <div class="overlay-content text-with-shadow">
                        <p>CHOICE 6</p>
                        <p>Vijaya Nagara</p>
                        <Link to="/property2/property2card1" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop15} alt="pop15"/>
                        <div class="overlay-content text-with-shadow">
                        <p>CHOICE 7</p>
                        <p>Hebbala</p>
                        <Link to="/property1/property1card2" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop16} alt="pop16"/>
                        <div class="overlay-content text-with-shadow">
                        <p>CHOICE 8</p>
                        <p>Nelamangalam</p>
                        <Link to="/property1/property1card1" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S2;