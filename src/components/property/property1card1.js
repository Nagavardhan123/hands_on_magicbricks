import Navbar from '../NavBar';
import Footer from '../Footer';
import pop1 from '../../images/property1/pop1.jpeg';
import Paracomp1 from '../paracomp1';

function S1_1() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Your Choice Details:</h1>
            <div className="card mb-5" style={{height:"30%", width:"50%", marginLeft:"10%", zIndex: -1}}>
              <img src={pop1} alt="pop1"/>
            </div>
            <div className="container-fluid mt-5">
              <Paracomp1></Paracomp1>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S1_1;