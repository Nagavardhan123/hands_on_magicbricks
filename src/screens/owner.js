import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ima from "../images/agent.jpeg";
import Owncom from '../components/owncomps/owncom';

function Owner() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <div className="container p-5">
                <div className='row'>
                    <div className='col-md-8'>
                        <h3>Sell or Rent your Property</h3>
                        <p>You are posting this Property for <span className="bg-warning p-1" style={{fontSize: "0.8vw"}}>FREE!</span></p>
                    </div>
                    <div className='col-md-4'>
                        <img src={ima} alt='nuvvay' style={{borderRadius:"1vw"}}/>
                    </div>
                </div>
                <div className='row'><h4>Personal Details</h4></div>
            </div>
            <div className='container-fluid'>
                <Owncom></Owncom>
            </div>
            <div className="container-fluid">
              <Footer></Footer>
            </div>
          </>);
  }

export default Owner;