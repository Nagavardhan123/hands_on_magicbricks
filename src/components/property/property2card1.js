import Navbar from '../NavBar';
import Footer from '../Footer';
import Paracomp2 from '../paracomp2';
import P2c1 from '../Universal/P2c1';

function S2_1() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Your Choice Details:</h1>
            <div className="container-fluid mt-5">
              <P2c1></P2c1>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S2_1;