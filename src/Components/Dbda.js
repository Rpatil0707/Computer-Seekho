import React from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import './Admin.css';


class Dbda extends React.Component
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

                <p className="text-center mt-3"><h2><b>Diploma in Big Data Analytics
</b></h2></p>
                <hr/>
                <p>DBDA will educate the aspirants who want to make an impact in the corporate and academic world in the domain of big data analytics as data scientist and researcher, big data leads/administrators/managers, business analysts and data visualization specialists. The course is also suitable for those who are already working in analytics to enhance their theoretical and conceptual knowledge as well as those with analytical aptitude and would like to start career in big data analytics in different business sectors. The collaboration with the different multi-national companies at the level of mutual research interests and customer related projects will ease the path for campus recruitment. The students will be able to work with big data platform, analyze various big data analysis techniques for useful business applications, design efficient algorithms for mining the data from large volumes, analyze the HADOOP and Map Reduce technologies associated with big data analytics, and explore big data applications.

</p>

                <br/>
                <div class="animate__animated animate__fadeInLeftBig animate__delay 1s animate__slower" className="mb-3">
                <img src="./images/dbda.jpg" className="aboutimage"></img>
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
export default Dbda;
