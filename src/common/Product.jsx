import React from 'react'
import "./Product.css"
import Button from '@mui/material/Button';

function Product({vechicle}) {
  return (
    <div className='fullProduct'>
        <div className="imagePro">
            <img src={vechicle.img} alt="" />
        </div>
        <div className="descPro">
            <h1>{vechicle.name}</h1>
            <p className="decs">
                {vechicle.desc}
            </p>
            <button type="button" className="btn btn-outline-dark btn-md p-2 me-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                VIEW DETAILS
            </button>
            <Button size='large' sx={{color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">Buy now</Button>
        </div>




        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" >
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Details of Rhyno {vechicle.name}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" >
                    <div className="details">
                        <div className="det">
                            <p className='head'>Battery -</p>
                            <p>{vechicle.details.Battery}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Battery features -</p>
                            <p>{vechicle.details.Batteryfeatures}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Battery warranty -</p>
                            <p >{vechicle.details.Batterywarranty}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Charging time -</p>
                            <p>{vechicle.details.Chargingtime}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Motor -</p>
                            <p>{vechicle.details.Motor}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Max speed -</p>
                            <p>{vechicle.details.Maxspeed}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Warranty on electronics -</p>
                            <p>{vechicle.details.Warrantyonelectronics}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Max range @30km/h -</p>
                            <p>{vechicle.details.Maxrange30kmh}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Max range @45km/h -</p>
                            <p>{vechicle.details.Maxrange45kmh}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Max range @full speed -</p>
                            <p>{vechicle.details.Maxrangefull}</p>
                        </div>
                        <div className="det">
                            <p className='head'>Other key benefits -</p>
                            <p>{vechicle.details.Otherkeybenefits}</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Product