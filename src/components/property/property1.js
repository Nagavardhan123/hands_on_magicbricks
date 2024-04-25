import Navbar from '../NavBar';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import image1 from "../../images/image1.webp";
import pop1 from '../../images/property1/pop1.jpeg';
import pop2 from '../../images/property1/pop2.jpeg';
import pop3 from '../../images/property1/pop3.jpeg';
import pop4 from '../../images/property1/pop4.jpeg';
import pop5 from '../../images/property1/pop5.jpeg';
import pop6 from '../../images/property1/pop6.jpeg';
import pop7 from '../../images/property1/pop7.jpeg';
import pop8 from '../../images/property1/pop8.jpeg';

function S1() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <div className="container-fluid d-flex">
              <SearchBar></SearchBar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Welcome to Owner Property page</h1>
            <div className="card mb-5" style={{height:"40%", width:"70%", marginLeft:"15%"}}>
              <img src={image1} alt="image1"/>
            </div>
            <div className="container mt-4 mb-5">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3" style={{borderRadius: "20px"}}>
                  <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={pop1} alt="pop1"/>
                    <div class="overlay-content text-with-shadow">
                      <p>CHOICE 1</p>
                      <p>Medahalli</p>
                      <Link to="/property1/property1card1" >click me &rarr;</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image" src={pop2} alt="pop2"/>
                    <div class="overlay-content text-with-shadow">
                      <p>CHOICE 2</p>
                      <p>Whitefield</p>
                      <Link to="/property1/property1card2" >click me &rarr;</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                      <img className="zoom-in-image" src={pop3} alt="pop3"/>
                      <div class="overlay-content text-with-shadow">
                        <p>CHOICE 3</p>
                        <p>Marathahalli</p>
                        <Link to="/property1/property1card3" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop4} alt="pop4"/>
                        <div class="overlay-content text-with-shadow">
                          <p>CHOICE 4</p>
                          <p>Deepanjali Nagar</p>
                          <Link to="/property1/property1card4" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="container mt-4">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3" style={{borderRadius: "20px"}}>
                  <div className="card" style={{height:"200px"}}>
                    <img className="zoom-in-image img-fluid" src={pop5} alt="pop5"/>
                    <div class="overlay-content text-with-shadow">
                        <p>CHOICE 5</p>
                        <p>R T Nagara</p>
                        <Link to="/property1/property1card5" >click me &rarr;</Link>
                      </div>
                  </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop6} alt="pop6"/>
                        <div class="overlay-content text-with-shadow">
                        <p>CHOICE 6</p>
                        <p>Vijaya Nagara</p>
                        <Link to="/property1/property1card6" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop7} alt="pop7"/>
                        <div class="overlay-content text-with-shadow">
                        <p>CHOICE 7</p>
                        <p>Hebbala</p>
                        <Link to="/property1/property1card7" >click me &rarr;</Link>
                      </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{height:"200px"}}>
                        <img className="zoom-in-image" src={pop8} alt="pop8"/>
                        <div class="overlay-content text-with-shadow">
                        <p>CHOICE 8</p>
                        <p>Nelamangalam</p>
                        <Link to="/property1/property1card8" >click me &rarr;</Link>
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

export default S1;