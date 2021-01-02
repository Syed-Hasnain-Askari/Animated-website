import React from 'react'
import animation from '../images/animation3.gif';
import './services.css';

export default function Services() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={animation} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                   <div className="row d-flex justify-content-center justify-content-sm-center mx-auto">
                        <div className="col-md-4 mt-5">
                         <h1 className="services">Services.</h1>
                        </div>
                   </div>
                   <div className="row d-flex justify-content-center mx-auto">
                        <div className="col">
                         <p className="services-paragraph text-start text-center">
                            We offer customized digital services and scalable operational strategies to prepare your Organization ride through the waves of uncertainty in the form of disruptive technology and government regulations so you can deliver accelerated and cost-effective services for your consumers
                         </p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
