import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
