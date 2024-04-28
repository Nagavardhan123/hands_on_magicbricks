import Navbar from '../NavBar';
import Footer from '../Footer';
import pop2 from '../../images/property1/pop2.jpeg';
import Paracomp1 from '../paracomp1';

function S1_2() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Your Choice Details:</h1>
            <div className="card mb-5" style={{height:"30%", width:"50%", marginLeft:"10%", zIndex: -1}}>
              <img src={pop2} alt="pop2"/>
            </div>
            <div className="container-fluid mt-5">
              <Paracomp1></Paracomp1>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S1_2;