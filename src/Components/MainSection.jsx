import React from 'react';
import about from "../images/about-img.png";
import square from '../images/square.svg';
import './mainsection.css';
import ScrollAnimation from 'react-animate-on-scroll';
import useWebAnimations from "@wellyshen/use-web-animations";
export default function MainSection(){
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: "rotate(360deg)"
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 20000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
      fill:"forwards"
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    },
    // More useful options...
  });

    return (
        <div className="we-are-section container">
           <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
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
        <div className="row d-flex justify-content-lg-center">
            <div className="col">
            <span><img ref={ref} src={square} className=" w-75 h-100 pb-5"/></span>
            </div>
        </div>
        </ScrollAnimation>   
        </div> 
    )
}
