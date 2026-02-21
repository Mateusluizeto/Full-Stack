import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // (Demos um nome para o BrowserRouter que é Router [BrowserRouter as Router])
import Home from "./Home/index.js"
import Orders from "./Orders/index.js"

function Rotas() {
 return(
    <Router>
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/orders" element={<Orders />}/> 
        </Routes>
    </Router>
 )
}

export default Rotas