import React from 'react';
import about from "../images/about-img.png";
import './mainsection.css';

export default function MainSection() {
    return (
        <div className="we-are-section container">
             <div className="row">
          <div className="col-md-12 d-flex justify-content-xl-start justify-content-center">
            <h1 className="we-are">We Are</h1>
          </div>
        </div>
        <div className="row pt-4">
          <div className="we-are-paragraph col-md-6">
            <p className="text-start">
              A highly specialized Management team with over 20 combined years
              of experience in the Healthcare industry with proven ability to
              optimally combine digital technology, skilled resources and
              efficient business processes to implement creative as well as
              proven market solutions to suit an ever-evolving market. Our forte
              has been to successfully tailor our solutions to support your
              needs whether it is in the space of Consulting, Product Management
              or Service Delivery
            </p>
          </div>
          <div className="col-md-6">
            <img src={about} style={{width:"600px",height:"500px"}} className="we-are-img" />
          </div>
        </div>
        </div>
    )
}
