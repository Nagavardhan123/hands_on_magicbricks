import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import AdminHome from './screens/adminhome';
import S1 from './components/property/property1';
import S1_1 from './components/property/property1card1';
import S1_2 from './components/property/property1card2';
import S1_3 from './components/property/property1card3';
import S1_4 from './components/property/property1card4';
import S1_5 from './components/property/property1card5';
import S1_6 from './components/property/property1card6';
import S1_7 from './components/property/property1card7';
import S1_8 from './components/property/property1card8';
import S2 from './components/property/property2';
import S2_1 from './components/property/property2card1';
import S2_2 from './components/property/property2card2';
import S2_3 from './components/property/property2card3';
import S2_4 from './components/property/property2card4';
import S2_5 from './components/property/property2card5';
import S2_6 from './components/property/property2card6';
import S2_7 from './components/property/property2card7';
import S2_8 from './components/property/property2card8';
import S3 from './components/property/property3';
import S3_1 from './components/property/property3card1';
import S3_2 from './components/property/property3card2';
import S3_3 from './components/property/property3card3';
import S3_4 from './components/property/property3card4';
import S3_5 from './components/property/property3card5';
import S3_6 from './components/property/property3card6';
import S3_7 from './components/property/property3card7';
import S3_8 from './components/property/property3card8';
import Card1 from './components/DSRcards/card1';
import Card2 from './components/DSRcards/card2';
import Owner from './screens/owner';
// import Login1 from './screens/Login1';
import Signin from './screens/four';
import Register from './screens/three';
import Users from './screens/users';
import Cart from './screens/cart';
import AddProduct from './screens/AddProduct';
import ListProduct from './screens/ListProduct';

function App() {
  return (
      <Routes path="/">
        <Route index element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/ListProduct' element={<ListProduct />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/users' element={<Users />} />
        <Route path='/Admin' element={<AdminHome />} />
        <Route path='/Owner' element={<Owner />} />
        <Route path='/property1' element={<S1 />} />
        <Route path='/property1/property1card1' element={<S1_1 />} />
        <Route path='/property1/property1card2' element={<S1_2 />} />
        <Route path='/property1/property1card3' element={<S1_3 />} />
        <Route path='/property1/property1card4' element={<S1_4 />} />
        <Route path='/property1/property1card5' element={<S1_5 />} />
        <Route path='/property1/property1card6' element={<S1_6 />} />
        <Route path='/property1/property1card7' element={<S1_7 />} />
        <Route path='/property1/property1card8' element={<S1_8 />} />
        <Route path='/property2' element={<S2 />} />
        <Route path='/property2/property2card1' element={<S2_1 />} />
        <Route path='/property2/property2card2' element={<S2_2 />} />
        <Route path='/property2/property2card3' element={<S2_3 />} />
        <Route path='/property2/property2card4' element={<S2_4 />} />
        <Route path='/property2/property2card5' element={<S2_5 />} />
        <Route path='/property2/property2card6' element={<S2_6 />} />
        <Route path='/property2/property2card7' element={<S2_7 />} />
        <Route path='/property2/property2card8' element={<S2_8 />} />
        <Route path='/property3' element={<S3 />} />
        <Route path='/property3/property3card1' element={<S3_1 />} />
        <Route path='/property3/property3card2' element={<S3_2 />} />
        <Route path='/property3/property3card3' element={<S3_3 />} />
        <Route path='/property3/property3card4' element={<S3_4 />} />
        <Route path='/property3/property3card5' element={<S3_5 />} />
        <Route path='/property3/property3card6' element={<S3_6 />} />
        <Route path='/property3/property3card7' element={<S3_7 />} />
        <Route path='/property3/property3card8' element={<S3_8 />} />
        <Route path='/card1' element={<Card1 />} />
        <Route path='/card2' element={<Card2 />} />
      </Routes>
  );
}

export default App;
