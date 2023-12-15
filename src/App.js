import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/chefcorner" Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
