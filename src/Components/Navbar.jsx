import React from 'react';
import './navbar.css';
import image from "../images/animation2.gif";
import ScrollAnimation from 'react-animate-on-scroll'
import logo from "../images/logo.png";

export default function Navbar() {
    return (
        <div className="header">
        <ScrollAnimation animateIn='fadeIn'>
        <nav className="navbar navbar-light shodow">
          <div className="container">
            <a className="navbar-brand">
              <img
                src={logo}
                alt=""
                width="40%"
                height="30%"
              />
              Zapare Technologies
            </a>
            <form className="d-flex">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Carrer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </form>
          </div>
        </nav>
        <section className=" solution-section container-fluid">
          <div class="row py-5 px-5 d-flex justify-content-center">
            <div className="col-md-6">
              <img src={image} className="img-fluid"></img>
            </div>
            <div className="col-md-6">
              <h6 className="text-justify header-heading">
                Customize Solutions To meet the need of
                the changing market
              </h6>
            </div>
          </div>
        </section>
        </ScrollAnimation>
      </div>
    )
}
