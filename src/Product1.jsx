import React from 'react'
import Product from './common/Product'

import bike1 from "./assets/bike1.png"


let obj = {
  name : "SE03 Lite",
  desc : "ndulge perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an Stable 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below! SE03 LITE",
  img :  bike1,
  details : {
    Battery : "1.8Kwh",
    Batteryfeatures : "LFP with 1500 cycles, Active Balancing, Waterproof (IP67)",
    Batterywarranty : "3 Years",
    Chargingtime : "3 hours (12A)",
    Motor : "1500W",
    Maxspeed : "50 km/h",
    Warrantyonelectronics : "0.5 year",
    Maxrange30kmh : "100 km",
    Maxrange45kmh : "90 km",
    Maxrangefull : "70 km",
    Otherkeybenefits : "Fire-safe battery, Range prediction, Comfortable ride, Stable and safe",
}
}

function Product1() {
  return (
    <Product vechicle={obj}/>
  )
}

export default Product1