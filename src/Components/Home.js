import React from 'react';
import NavBar from './NavBar';
import './Home.css';
import {Carousel, Col,Row,Card,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';


// import EnquiryApp from './EnquiryApp';


function Home()
{
    return(
        <div>
            
            {/* <img src="./images/head.jpg" alt="HeadImage" className="headimage"/> */}
          <div className="unibgcolor">
            <Container>
            <Row>
              <Col>
               <h4><i className="fas fa-university"></i> SMVITA</h4>
              </Col>

              <Col>
                <div className="login-button">
                
                <Button variant="outline-light" className="adminlog-btn"><i class="fas fa-user-lock me-2"></i><Link to="/Admin" style={{textDecoration:'none',color:'#fff'}}>Admin Login</Link></Button>
                </div>

                
              </Col>
            </Row>
            </Container>
          </div>

            <NavBar/>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/img1.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/img2.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/img3.jpg"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>


<div style={{padding:'40px'}}>
        <h1 className="text-center pt-5 mb-5 card-h1" >Why Choose VITA?</h1>
        <div className="mov-card">
   
        <Card className="animate__animated animate__fadeInLeft animate__slower card-design">
          <Card.Body>
            <div className="card-flex">
              <div>
                <i className="fas fa-comments card-icons"></i>
              </div>
              <div md="9">
              <Card.Title><b>DAILY LIVE CLASSES</b></Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text font >
              Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="animate__animated animate__fadeInRight animate__delay-1s animate__slower card-design" >
          <Card.Body>
            <div className="card-flex">
              <div>
                <i className="fas fa-vial card-icons"></i>
              </div>
              <div md="9">
              <Card.Title><b>LIVE TESTS & QUIZES</b></Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
              Evaluate your preparation with our regular mock tests and quizzes and get detailed analysis on your performance
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
              </div>
            </div>
          </Card.Body>
        </Card>
</div>

<div className="mov-card">
          <Card className="animate__animated animate__fadeInLeft animate__delay-2s animate__slower card-design">
            <Card.Body>
              <div className="card-flex">
                <div>
                  <i className="fas fa-book card-icons"></i>
                </div>
                <div md="9">
                <Card.Title><b>STRUCTURED COURCES</b></Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                All our courses are structured in line with industry requirement to help you best prepare for it
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                </div>
              </div>
            </Card.Body>
          </Card>

<Card className="animate__animated animate__fadeInRight animate__delay-3s animate__slower card-design">
  <Card.Body>
    <div className="card-flex">
      <div>
      <i className="fas fa-universal-access card-icons"></i>
      </div>
      <div md="9">
      <Card.Title><b>LECTURE ACCESS</b></Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      <Card.Text>
      You will get access to all our live and recorded lectures to watch from the comfort of any of your devices
      </Card.Text>
      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
      </div>
    </div>
  </Card.Body>
</Card>
</div>
</div>
      <div>
          <h1 className="text-center card-h1"><b>STUDY AT VITA</b></h1>
          <hr/>
  <Container>
      <div className="studentbutton">
        <div>
          <p style={{fontSize:'20px'}}>Join a community of bold, caring and engaged people like you to build <br/>a better society and a more sustainable world.</p>
        </div>
        <div className="reg-btn">
          <Button ariant="outline-light" className="me-3 reg-button"><i className="fas fa-user"></i><Link to="/NewStudent"> Student Registration</Link></Button>
        </div>
      </div>
  </Container>
      <hr/>

      <div>
      <h1 className="text-center card-h1"><b>Get in touch</b></h1>
          <hr/>

          <Container>
      <div className="studentbutton">
        <div>
            <p><h3><b>We are happy to help!</b></h3></p>
          <p style={{fontSize:'20px'}} >Submit your inquiry.We’ll get back to you as soon as possible.</p>
        </div>
        <div className="reg-btn">
          <Button ariant="outline-light" className="me-3 reg-button"><i class="fas fa-info-circle"></i><Link to="/NewEnquiry"> Enquiry</Link></Button>
        </div>
        <hr/>
        
      </div>
  </Container>

      </div>

      
     
  
</div>
<Footer/>
     </div>
    )
  }
export default Home;
