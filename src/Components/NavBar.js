
import {React,useState} from 'react';
import {Navbar, Nav, Container,Modal,Table} from 'react-bootstrap';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
function NavBar(){
    const [modalShow, setModalShow] = useState(false);
    function MyVerticallyCenteredModal(props) {
        return(
            <div>
                <Modal
{...props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
<label className="schedule">SCHEDULE</label>
</Modal.Title>
</Modal.Header>
<Modal.Body>
<Table striped bordered hover>
  <thead>
    <tr>
      <th colSpan="4" className="text-center">SCHEDULE FOR APRIL 2020 TO NOVEMBER 2021</th> 
    </tr>
  </thead>
  <tbody className="text-center">
    <tr >
      <td><b>COURSE</b></td>
      <td><b>AGE</b></td>
      <td><b>NO.OF HOURS</b></td>
      <td><b>FEES</b></td>
    </tr>
    <tr>
      <td><a href="/MSCIT">MS-CIT</a></td>
      <td>10 To 16 YEARS</td>
      <td>30</td>
      <td>6000</td>
    </tr>
    <tr>
    <td><a href="/Dac">DAC</a></td>
      <td>22 TO 40 YEARS</td>
      <td>80</td>
      <td>660000</td>
    </tr>
    <tr>
    <td><a href="/Dbda">DBDA</a></td>
      <td>22 TO 40 YEARS</td>
      <td>80</td>
      <td>70000</td>
    </tr>
  </tbody>
</Table>

</Modal.Body>
<Modal.Footer>
{/* <Button onClick={props.onHide}>Close</Button> */}
</Modal.Footer>

</Modal>
            </div>
        );
    }
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
              <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                  {/* <NavLink to="/" className="navlink-btn active">Home</NavLink>
                  <NavLink to="/Aboutus" className="navlink-btn">About Us</NavLink>
                  <NavLink onClick={() => setModalShow(true)} to="" className="navlink-btn">Schedule</NavLink> */}
                  <NavLink to="/" className="navlink-btn">Home</NavLink>
                  <NavLink to="/Aboutus" className="navlink-btn">About Us</NavLink>
                  <NavLink onClick={() => setModalShow(true)} to="" className="navlink-btn">Schedule</NavLink>
                  <NavLink to="/Courselistview" className="navlink-btn">Courses</NavLink>
                  {/* <NavDropdown title="Courses" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Ms-Cit</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">DAC</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">DBDA</NavDropdown.Item>
                  </NavDropdown> */}
                  <NavLink to="/Gallery" className="navlink-btn">Gallery</NavLink>
                  <NavLink to="/NewEnquiry" className="navlink-btn">Contact Us</NavLink>
                  {/* <NavLink to="/Enquiry2" className="navlink-btn">Enquiry</NavLink> */}
                  </Nav>
                  <Nav>
                  {/* <Button variant="light"><i className="fas fa-cog fa-spin"></i></Button> */}
                  </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
        </div>
    )
}

export default NavBar;