import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (<>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid bg-danger">
          <div className='d-flex align-items-center justify-content-left' style={{height: "50px", marginLeft: "100px"}}>
            <Link className="navbar-brand text-lowercase custom-font-size fw-bold text-white" to="/" >magicbricks</Link>
            <Link className="nav-link text-white" to="#" style={{marginLeft:"20px", fontSize:"18px"}}>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle border-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Bangalore
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-white d-flex align-items-center justify-content-left" style={{zIndex: 1}}>
            <Link className="nav-link" to="/" style={{display: "inline"}}>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle border-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MB Prime
                  </button>
                  <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="nav-link" to="/" style={{marginRight: "30px", display: "inline"}}>
              <div className="container">
                <div className="dropdown">
                  <button className="btn btn-danger dropdown-toggle border-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Login
                  </button>
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </Link>
            <div className="border p-2" style={{backgroundColor:"white", borderRadius: "20px", display: "inline", zIndex: 0, marginRight: "200px"}}>
              <Link className="nav-link text-black" to="/" style={{display: "inline", opacity: 0.7}}> Post Property <span className="bg-warning" style={{ borderRadius: "1px", fontSize: "10px"}}>FREE</span> </Link>
            </div>
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
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                  <div className="dropdown-menu" id="menu1" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
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
