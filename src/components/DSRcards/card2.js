import Navbar from '../NavBar';
import Footer from '../Footer';
import body2 from '../../images/body2.jpg';
import Paracomp2 from '../paracomp2';

function Card2() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <h1 className="text-left mb-5" style={{marginLeft: "8%"}}>About Folium by SUMADHURA projects:</h1>
            <div className="card mb-5" style={{height:"30%", width:"50%", marginLeft:"10%", zIndex: -1}}>
              <img src={body2} alt="body1"/>
            </div>
            <div className="container-fluid mt-5">
              <Paracomp2></Paracomp2>
            </div>
            <div className="container-fluid mt-5">
              <Footer></Footer>
            </div>
          </>);
  }

export default Card2;