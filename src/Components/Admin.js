import React from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import './Admin.css';


class Admin extends React.Component
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

                <p className="text-center mt-3"><h2><b>Student Section</b></h2></p>
                <hr/>

                <div>
                    <p style={{fontSize:'20px'}} >Check Student Registraion List</p>
                    <div className="reg-btn">
                            <Button ariant="outline-light" className="me-3 std-button"><i class="fas fa-user-graduate"></i><Link to="/Studentlist"> Student List</Link></Button>
                    </div>
                </div>

                <p className="text-center mt-3"><h2><b>Enquiry Section</b></h2></p>
                <hr/>

                <div>
                    <p style={{fontSize:'20px'}} >Check Enquirer List</p>
                    <div className="reg-btn">
                            <Button ariant="outline-light" className="me-3 std-button"><i class="fas fa-phone-square-alt"></i><Link to="/Enquirylist"> Enquiry List</Link></Button>
                    </div>
                </div>

                <p className="text-center mt-3"><h2><b>Course Section</b></h2></p>
                <hr/>

                <div>
                    <p style={{fontSize:'20px'}} >Check Course List</p>
                    <div className="reg-btn">
                            <Button ariant="outline-light" className="me-3 std-button"><i class="fas fa-book-reader"></i><Link to="/Courselist"> Courses Offered</Link></Button>
                    </div>
                </div>

                <hr/>
                <div>
                    <p style={{fontSize:'20px'}} >Design New Course</p>
                    <div className="reg-btn">
                            <Button ariant="outline-light" className="me-3 std-button"><i class="fas fa-book-open"></i><Link to="/NewCourse"> New Course</Link></Button>
                    </div>
                </div>
                <hr/>
                </Container>
            </div>



        </div>

        
        );
    }
}
export default Admin;
