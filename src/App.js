import React from "react";
import {Routes, Route} from "react-router-dom";

// componets: 
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import Dashboard from "./Componets/Dashboard";


const App = () => {
    

  return(
    <div>
        <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  )
}


export default App;