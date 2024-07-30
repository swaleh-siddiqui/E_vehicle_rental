import React from 'react'
import "./Rentals.css"
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

function Rentals() {
  return (
    <div className='rentals'>
        <h1>Rentals</h1>
        <p>Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.</p>
        <p>Additionally, we're redefining campus commuting with our rental fleet tailored for college                   students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.</p>
        <div className="downloads">
            <h2>Download our rental app</h2>
            <div className="download">
            <Button startIcon={<AppleIcon  />} size='large' sx={{width: "12rem", height : "4rem", fontSize : "x-large", color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">APPLE</Button>
            <Button startIcon={<AndroidIcon />} size='large' sx={{width: "12rem", height : "4rem", fontSize : "x-large",color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">ANDROID</Button>
            </div>
        </div>
    </div>
  )
}

export default Rentals