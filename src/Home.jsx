import "./Home.css"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import frontImg from "./assets/OIP.jpeg"
import frontphoto from "./assets/frontphoto.png"
import bike1 from "./assets/bike1.png"
import bike2 from "./assets/bike2.png"
import bike3 from "./assets/bike3.png"

import VehicleCard from "./common/VehicleCard";
import USPCarousel from "./common/USPCarousel";


let img1 = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

let vehicle = [
  {
    img : bike1,
    name : "SE03Lite",
    url : "/product1"
  },
  {
    img : bike2,
    name : "SE03",
    url : "/product2"
  },
  {
    img : bike3,
    name : "SE03Max",
    url : "/product3"
  }
]

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Style','Elegance', 'Minimalism', 'Comfort'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false
    };

    const typed = new Typed(typedElement.current, options);
  
    return () => {
        typed.destroy();
    }
  }, [])

  return (
    <>
        <div className="front">
            <div className="img">
            <img src={frontImg} alt="" />
            </div>
            <div className="screen">

            </div>
            <div className="frontline">
                <h1>Let's Elevate Your Ride Experience With Rhyno - Where Superiority Meets <br /> <span ref={typedElement}></span> .</h1>
            </div>

        </div>


        <div className="photos">
          <img src={frontphoto} alt="" />
        </div>

        <div className="cards">
          {vehicle.map((item) => (
            <VehicleCard img={item.img} name={item.name} url={item.url}/>
          ))}
        </div>

        <div className="usp">
          <USPCarousel/>
        </div>

    </>
  )
}

export default Home