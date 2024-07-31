import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" footer bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">


      <div className="col-md-10 col-lg-10 col-xl-10 mx-auto mt-3 mb-3">
            <h3 className="text-uppercase mb-4 font-weight-bold">Contact Us</h3>
            <form className='form'>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea className="form-control"  placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-light px-4">Send</button>
            </form>
          </div>


        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 style={{textAlign : "left"}} className="text-uppercase mb-4 font-weight-bold">Rhyno</h5>
            <p style={{textAlign : "left"}}>E-Mail - info@rhyno.in</p>
            <p style={{textAlign : "left"}}>Mobile no. - +91-9023987528</p>
            <p style={{textAlign : "left"}}>Location - Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Quick Links</h5>
            <p>
            <Link to={"/about-us"} className="text-white">About Us</Link>
            </p>
            <p>
            <Link to={"/product1"} className="text-white">Product1</Link>
            </p>
            <p>
            <Link to={"/product2"} className="text-white">Product2</Link>
            </p>
            <p>
            <Link to={"/product3"} className="text-white">Product3</Link>
            </p>
            <p>
            <Link to={"/rentals"} className="text-white">Rentals</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Useful links</h5>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Privacy policy</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Refund policy</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Website policy</a>
            </p>
            <p>
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Career</a>
            </p>
          </div>

        
        </div>

        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">© 2024 All rights reserved:
              <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                <strong> rhyno.com</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-google-plus"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
