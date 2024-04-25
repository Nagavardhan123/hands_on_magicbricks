import Navbar from '../NavBar';
import Footer from '../Footer';
import body1 from '../../images/body1.jpg';
import Paracomp1 from '../paracomp1';

function Card1() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>About DSR:</h1>
            <div className="card mb-5" style={{height:"30%", width:"50%", marginLeft:"10%", zIndex: -1}}>
              <img src={body1} alt="body1"/>
            </div>
            <div className="container-fluid mt-5">
              <Paracomp1></Paracomp1>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default Card1;