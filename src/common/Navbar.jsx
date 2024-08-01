import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import logo from "./rhyno_logo.png"


function Navbar() {
  return (
      <>
          <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
          <div className="container-fluid ">
            <a className="navbar-brand logo" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink to={"/"} activeCllassName="active" className="link nav-link">Home</NavLink>
                  <div className="line"></div>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about-us"} activeCllassName="active" className="link nav-link">About Us</NavLink>
                  <div className="line"></div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to={"/product1"} className="link dropdown-item">Product1</Link></li>
                    <li><Link to={"/product2"} className="link dropdown-item">Product1</Link></li>
                    <li><Link to={"/product3"} className="link dropdown-item">Product1</Link></li>
                    <li><Link to={"/compare"} className="link dropdown-item">Compare All</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#Footer" className="link nav-link">Contact Us</a>
                  <div className="line"></div>
                </li>
                <li className="nav-item">
                  <NavLink to={"/pre-book"} activeCllassName="active" className="link nav-link">Pre Book</NavLink>
                  <div className="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  )
}

export default Navbar