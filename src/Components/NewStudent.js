import React from 'react';
import NavBar from './NavBar';
import { Card, Form } from 'react-bootstrap';

class NewStudent extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        Message: ''
      };
    }
    
    onCreateNewStudent=()=>{
      let studentdemo={
            
            "student_name":this.refs.student_name.value,
            "student_address":this.refs.student_address.value,
            "student_gender":this.refs.student_gender.value,
            "student_dob":this.refs.student_dob.value,
            "student_age":this.refs.student_age.value,
            "student_qualification":this.refs.student_qualification.value,
            "student_mobile":this.refs.student_mobile.value,
            "student_username":this.refs.student_username.value,
            "student_password":this.refs.student_password.value,
            "batch_id":this.refs.batch_id.value,
            "payment_master_id":this.refs.payment_master_id.value,
          
          };
         let demo= JSON.stringify(studentdemo);
          console.log(JSON.parse(demo));
          fetch("http://localhost:8080/student",{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: demo
      }).then(r=>{r.json()}).then(res=>{
        if(res){
          this.setState({message:'Student Registraion Successfully'});
        }
      });
      }
    
    render(){
      return(
        <div>

            <NavBar/> 


            <div className="Enque_card">
            
        <Card>
            <Card.Header><h3 className="text-center"><b>Please Enter Student Details</b></h3></Card.Header>
        <Card.Body className="Enque_card_body">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref="student_name"  placeholder="Enter name"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" ref="student_address"  placeholder="Enter address"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" ref="student_gender"  placeholder="Enter gender"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" ref="student_dob" placeholder="Enter date of birth"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" ref="student_age" placeholder="Enter age"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Qualification</Form.Label>
                <Form.Control type="text" ref="student_qualification" placeholder="Enter qualification"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="number" ref="student_mobile" placeholder="Enter mobile number"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" ref="student_username" placeholder="Enter username"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" ref="student_password" placeholder="Enter password"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Batch No</Form.Label>
                <Form.Control type="text" ref="batch_id" placeholder="Enter batch number"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Payment_id </Form.Label>
                <Form.Control type="text" ref="payment_master_id" placeholder="Enter payment id"/>
              </Form.Group>
              
              <button onClick={this.onCreateNewStudent}>Submit</button>

              <button type="reset" className="ms-3">Cancel</button>

              

               

                
            </Form>
        </Card.Body>
        </Card>
        </div>


          {/* <h2>Please Enter NewStudent Details...</h2>
          <p>
            <label>Student ID : <input type="text"  ref="student_id"></input></label>
          </p>
          <p>
            <label>Name : <input type="text" ref="student_name"></input></label>
          </p>
          <p>
            <label> Address: <input type="text" ref="student_address"></input></label>
          </p>
          <p>
            <label> Gender : <input type="text" ref="student_gender"></input></label>
          </p>
          <p>
            <label> Date of Birth : <input type="text" ref="student_dob"></input></label>
          </p>
          <p>
            <label> Age : <input type="text" ref="student_age"></input></label>
          </p>
          <p>
            <label> Qualification : <input type="text" ref="student_qualification"></input></label>
          </p>
          <p>
            <label> Mobile : <input type="text" ref="student_mobile"></input></label>
          </p>
          <p>
            <label> Username : <input type="text" ref="student_username"></input></label>
          </p>
          <p>
            <label> Password : <input type="text" ref="student_password"></input></label>
          </p>
          <p>
            <label> Batch No : <input type="text" ref="batch_id"></input></label>
          </p>

          <p>
            <label>Payment_id  : <input type="text" ref="payment_master_id"></input></label>
          </p>
        
          <button onClick={this.onCreateNewStudent}>Submit</button> */}
    </div>
      )
    }
  }
  export default NewStudent;