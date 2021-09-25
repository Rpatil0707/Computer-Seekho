import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer()
{
  return(
    <div className="footer-head">
      <div className="footer-flex">
        <div className="wow fadeInUp visit-grid" data-wow-duration="2s">
          <h4 className="mb-5 text-center" >CONTACT INFO</h4 >
          <h6><i className="fas fa-at" ></i> Email : contact@SMVITA.com</h6>
          <h6><i className="fab fa-firefox" ></i> Web : smvita.com</h6>
          <h6><i className="fas fa-phone-alt"></i> Contact No.: 0638-22233016 </h6>
        </div>
        <div className="wow fadeInUp visit-grid" data-wow-duration="2s" data-wow-delay="1s">
          <h4 className="mb-5 text-center" >SM VITA</h4>
          <div className="tutorial-links">
            <Link to="/About" className="btn btn-primary" >About Us</Link>
            <Link to="/Contact" className="btn btn-primary" >Contact Us</Link>
            <Link to="/Terms" className="btn btn-primary" >Terms & Conditions</Link>
          </div>
        </div>
        <div className="wow fadeInUp visit-flex visit-grid" data-wow-duration="2s" data-wow-delay="2s">
          <h4 className="mb-5 text-center" >VISIT</h4>
          <p>5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme, Andheri (W), Mumbai 400 049</p>
        </div>
        <div className="wow fadeInUp visit-grid" data-wow-duration="2s" data-wow-delay="3s">
          <h4 className="mb-5 text-center">FOLLOW US ON</h4>
          <div className="fso-grid">
          <Link to=""><i className="fab fa-facebook fso-i fso-facebook"></i></Link>
          <Link to=""><i className="fab fa-instagram fso-i fso-instagram"></i></Link>
          <Link to=""><i className="fab fa-twitter fso-i fso-twitter"></i></Link>
          <Link to=""><i className="fab fa-youtube fso-i fso-youtube"></i></Link>
          <Link to=""><i className="fab fa-linkedin fso-i fso-linkedin"></i></Link>
          <Link to=""><i className="fab fa-github fso-i fso-github"></i></Link>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-4"></hr>
      <Container>
      <h5 className="text-center" className="animate__animated animate__fadeInUp">© All Rights Reserved SMVITA.</h5>
      </Container>
    </div>
  )
}
export default Footer;
