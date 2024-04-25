import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import Boody from '../components/body';

function Home() {
  return (<>
            <div className="container-fluid">
              <Navbar></Navbar>
            </div>
            <div className="container-fluid d-flex">
              <SearchBar></SearchBar>
            </div>
            <div className="container-fluid">
              <Cards></Cards>
            </div>
            <div className="container-fluid">
              <Boody></Boody>
            </div>
            <div className="container-fluid">
              <Footer></Footer>
            </div>
          </>);
  }

export default Home;