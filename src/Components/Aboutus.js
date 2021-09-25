import React from 'react';
import { Row,Container,Col,Button,Carousel} from 'react-bootstrap';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import './Aboutus.css';
import Footer from './Footer';

function Aboutus()
{
    return(
    <div>
             <div className="unibgcolor">
            <Container>
            <Row>
              <Col>
               <h3><i className="fas fa-university"></i> SMVITA</h3>
              </Col>

              <Col>
                <div className="login-button">
                <Button variant="outline-light" className="me-3"><i class="fas fa-user"></i> Student Registration</Button>
                <Button variant="outline-light" ><i class="fas fa-user-lock"></i><Link to="/Login">Admin Login</Link> </Button>
                </div>
              </Col>
            </Row>
            </Container>
          </div>
          <NavBar/>

          <h1 className="text-center mt-5 animate__animated animate__zoomIn animate__slower"><b>ABOUT US</b></h1>
                <h4 class="animate__animated animate__zoomIn animate__slower text-center mb-3">Our Main Aim Is To Provide Easy And Quality Education for Student</h4>
                <br/>
        <div className="Abtus">
            <div class="animate__animated animate__fadeInLeftBig animate__delay-1s animate__slower">
                <img src="./images/img7.jpg" className="aboutimage"></img>
            </div>    
            <div >
                <Container>
                 
                <h4 class="animate__animated animate__zoomIn animate__delay-1s animate__slower"><b>✒ We Believe :</b></h4>
                <p class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">To learn and work successfully in an increasingly information-rich society, one must be able to use technology effectively and creatively. This applies to all strata of society...students, teachers, professionals, homemakers and senior citizens.</p> 
                <br/>
                <h4 class="animate__animated animate__zoomIn animate__delay-1s animate__slower"><b>✒ Our Mission :</b></h4>
                <p class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">To Develop capable users of Information Technology who will effectively and creatively use the most amazing machine – a PC!</p>
                <br/> 
                </Container>
              
            </div>
        </div>
        <div className="aboutus-text">
            <h4 class="animate__animated animate__zoomIn animate__delay-1s animate__slower"><b>✒ What We Offer :</b></h4>
                <br/>
                <h5 class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">✎Customized Workshops to empower the Student :</h5>
                <p class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">These workshops are designed keeping in mind the individual needs of students, teachers, professionals, homemakers and Senior Citizens.</p>
                <hr/>
                <h5 class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">✎Maharashtra State Certificate in Information Technology ( MS-CIT ) :</h5>
                <p class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">As an Authorized Learning Centre of Maharashtra Knowledge Corporation (MKCL) we offer MS-CIT which aims at making the participants smart users of computers by learning Word, Excel, PowerPoint and Internet though practical case studies.</p>
                <hr/>
                <h5 class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">✎Post Graduate Diploma In Advance Computing (PG DAC) :</h5>
                <p class="animate__animated animate__fadeInRightBig animate__delay-1s animate__slower">As an Authorized training centre of CDAC’s Advanced Computing Training School we offer PG DAC. (C-DAC is the Centre for Development in Advanced Computing, an initiative of the Ministry of IT, Government of India) B.E and B.Tech graduates from across the country are selected for this PG Diploma through C-DAC’s All India Common Admission Test. For details: www.vidyanidhi.com</p>
                <hr/>
            </div> 
        <Footer/>
                
    </div>
    )
}

export default Aboutus;
