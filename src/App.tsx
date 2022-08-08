import React from 'react';

import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Category from './components/Category/Category';

function App() {
  return (
    

<Router>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/category" element={<Category/>}/>
      
      
      </Routes>
    {/* <Footer/> */}
  </Router>

  
  );
}

export default App;
