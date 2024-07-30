import React from 'react'
import Product from './common/Product'

import bike2 from "./assets/bike2.png"


let obj = {
    name : "SE03",
    desc : "Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!",
    img : bike2,
    details : {
        Battery : "2.7Kwh",
        Batteryfeatures : "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
        Batterywarranty : "3 Years",
        Chargingtime : "4 hours (12A)",
        Motor : "1500W",
        Maxspeed : "55 km/h",
        Warrantyonelectronics : "1 year",
        Maxrange30kmh : "150 km",
        Maxrange45kmh : "110 km",
        Maxrangefull : "90 km",
        Otherkeybenefits : "Fire-safe battery Range prediction Comfortable ride Stable and safe",
    }
  }

function Product2() {
    return (
        <Product vechicle = {obj}/>
    )
}

export default Product2