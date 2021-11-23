import { BrowserRouter,Route, Routes, NavLink, Navigate } from "react-router-dom";
import React from 'react';
import './App.css';
import './About/About';
import './Profile/Profile';
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBook } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Home from "./Home/Home";
import About from "./About/About";
import Main from "./Main/Main";


function App() {
  return (
    <BrowserRouter>
      <header>
        <img src="/logo.png" />
        <p id="titleGroup">PlantPedia</p>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Main" element={<Main />}></Route>
        </Routes>
      </div>
      <footer>
        <NavLink to="/Home" className="iconWrapper">
          <AiOutlineHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/Main" className="iconWrapper">
          <AiOutlineBook className="icon" />
          Plant Information
        </NavLink>
        <NavLink to="/" className="iconWrapper">
          <BsSearch className="icon" />
          Search
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <CgProfile className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
