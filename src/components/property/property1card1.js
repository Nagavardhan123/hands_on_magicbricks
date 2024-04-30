import Navbar from '../NavBar';
import Footer from '../Footer';
import Universal1 from '../Universal/universal1';

function S1_1() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>Your Choice Details:</h1>
            <div className="container-fluid mt-5">
              <Universal1></Universal1>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S1_1;