import Navbar from '../NavBar';
import Footer from '../Footer';
import pop11 from '../../images/property2/pop11.jpeg';
import Paracomp2 from '../paracomp2';

function S3_3() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Your Choice Details:</h1>
            <div className="card mb-5" style={{height:"30%", width:"50%", marginLeft:"10%", zIndex: -1}}>
              <img src={pop11} alt="pop11"/>
            </div>
            <div className="container-fluid mt-5">
              <Paracomp2></Paracomp2>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S3_3;