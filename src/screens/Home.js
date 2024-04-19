import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <div className="container-fluid">
              <Footer></Footer>
            </div>
          </>);
  }

export default Home;