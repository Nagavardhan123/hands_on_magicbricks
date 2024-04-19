import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <Router>
      <Routes path="/">
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
