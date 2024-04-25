import Navbar from '../NavBar';
import Footer from '../Footer';
import pop16 from '../../images/property2/pop16.jpeg';
import Paracomp2 from '../paracomp2';

function S3_8() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Your Choice Details:</h1>
            <div className="card mb-5" style={{height:"30%", width:"50%", marginLeft:"10%", zIndex: -1}}>
              <img src={pop16} alt="pop16"/>
            </div>
            <div className="container-fluid mt-5">
              <Paracomp2></Paracomp2>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S3_8;