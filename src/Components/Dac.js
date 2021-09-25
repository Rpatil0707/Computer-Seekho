import React from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import './Admin.css';


class Dac extends React.Component
{
    render()
    {
        return(
            <div>
                
                {/* <img src="./images/head.jpg" alt="HeadImage" className="headimage"/> */}
              <div className="unibgcolor">
                <Container>
                <Row>
                  <Col>
                   <h3><i className="fas fa-university"></i> SMVITA</h3>
                  </Col>
    
                  <Col>
                    <div className="login-button">
                    
                    <Button variant="outline-light" className="adminlog-btn"><i class="fas fa-user-lock me-2"></i><Link to="/Login" style={{textDecoration:'none',color:'#fff'}}>Admin Login</Link> </Button>
                    </div>
                  </Col>
                </Row>
                </Container>
              </div>
                <NavBar/>

            <div>
                <Container>

                <p className="text-center mt-3"><h2><b>Diploma In Advance Computing</b></h2></p>
                <hr/>
                <p>Today’s pandemic situation WFH (Work From Home) is a buzzing phrase, all business hubs, Ad agencies, blue chip organisations are working on digital platforms. Why should learning be left behind, thus, C-DAC ACTS has initiated a new way of learning and mentoring in which highly popular Diploma in Advanced Computing would be offered online. Course focuses engineers and IT professionals who would wish to venture into the domain of advanced computing. It aims at enabling students to work on current technology scenarios and prepare them to keep pace with the changes in technology and requirements of the growing IT industry.
</p>

                <br/>
                <div class="animate__animated animate__fadeInLeftBig animate__delay 1s animate__slower" className="mb-3">
                <img src="./images/dac.jpg" className="aboutimage"></img>
                <br/>
                <Container style={{padding:"20px"}}> 
                <h4>Eligibility Criteria For The Course:</h4>
                <p>Graduate in Engineering (10+2+4 or 10+3+3 years) in any discipline of Engineering. OR
MSc/MS (10+2+3+2 years) in Computer Science, IT, Electronics with Mathematics in 10+2. OR
MCA, MCM, OR
Post Graduate Degree in Physics / Mathematics / Statistics, OR
Post Graduate Degree in Management with graduation in IT / Computer Science / Computer Applications
</p>
</Container>
               
                </div>
                
                   
                
                </Container>
            </div>



        </div>

        
        );
    }
}
export default Dac;
