import React from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import './Admin.css';


class MSCIT extends React.Component
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

                <p className="text-center mt-3"><h2><b>MS-CIT</b></h2></p>
                <hr/>
                <p>MS-CIT is an Information Technology (IT) literacy course started by MKCL in the year 2001. It is the most popular IT Literacy course in Maharashtra. In 21st Century, most of the new actionable knowledge is being digitally born (often through digital collaborations), digitally stored, digitally presented, digitally distributed, digitally accessed, digitally archived and managed. It only seems natural that it has become an essential part of one’s personal, professional and social life. It has also transformed the way of living in 21st Century.</p>

                <br/>
                <div class="animate__animated animate__fadeInLeftBig animate__delay 1s animate__slower">
                <img src="./images/Mscit.jpg" className="aboutimage"></img>
               
                </div>
                
                   
                
                </Container>
            </div>



        </div>

        
        );
    }
}
export default MSCIT;
