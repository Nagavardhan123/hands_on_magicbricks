import Navbar from '../NavBar';
import Footer from '../Footer';
import pop2 from '../../images/property1/pop2.jpeg';
import Paracomp1 from '../paracomp1';
import Universal2 from '../Universal/universal2';
function S1_2() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <div className="container-fluid mt-5">
              <Universal2></Universal2>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default S1_2;