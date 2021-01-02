import React from 'react';
import'./footer.css';
import logo from "../images/logo2.png";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="container">
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
                    <div className="row">
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
