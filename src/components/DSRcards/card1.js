import Navbar from '../NavBar';
import Footer from '../Footer';
import Unicard1 from '../Universal/Unicard1';

function Card1() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>About DSR:</h1>
            <div className="container-fluid mt-5">
              <Unicard1></Unicard1>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default Card1;