import React from "react";
// import Timing from "./components/Timing";
import Home from "./components/Home";
import Halal from "./components/Halal";

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = ()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/Timing" element={<Timing />} /> */}
    <Route path="/Halal" element={<Halal />} />


   

  </Routes>
  </BrowserRouter>
)
}
export default App