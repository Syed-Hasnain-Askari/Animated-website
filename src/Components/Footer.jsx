import React from 'react';
import './footer.css';
import logo from "../images/logo2.png";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div>
                <div className="row mx-auto d-flex justify-content-lg-center justify-content-center">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-light text-center py-5 footer-heading">Care To Join Us?</h1>
                            <p className="text-center footer-paragraph">
                                Embark on an exciting career with us to learn and grow alongside the best in the industry
                        </p>
                            <p className="text-center mt-5 text-light sub-heading">view current opeining</p>
                            <div className="row d-flex justify-content-center pb-5">
                                <div className="border-line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row border border-bottom">
                    </div>
                    <div className="row mt-5">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light">Career</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-md-between pt-4">
                    <p className="text-muted">All right reserved ©2019 zaparetechnologies.com</p>
                    <p className="text-muted">Design by: Syed Hasnain Askari</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
