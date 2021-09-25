import React from 'react';
import { Card, Form } from 'react-bootstrap';
import NavBar from './NavBar';
import './Enquiry.css';
class NewEnquiry extends React.Component {


  constructor(props) {
    super(props);
    
    this.state = {
      Message: ''
    };
  }

  onCreateNewEnquiry=()=>{
    let enquirydemo={
          
          "name":this.refs.name.value,
          "address":this.refs.address.value,
          "mobile":this.refs.mobile.value,
          "alternative_mobile_number":this.refs.alternative_mobile_number.value,
          "email":this.refs.email.value,
          "date":this.refs.date.value,
          "query":this.refs.query.value,
        
        };
       let demo= JSON.stringify(enquirydemo);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/forms",{
      method: 'POST',
      headers:{'Content-type':'application/json'},
        body: demo
    }).then(r=>{r.json()}).then(res=>{
      if(res){
        this.setState({message:'NewEnquiry is Submitted Successfully'});
      }
    });
    }
    
    render(){
      return(
        <div>
          <NavBar/>

          <div className="Enque_card">

              <Card>
              <Card.Header><h2 className="text-center"><b>Enter Enquiry Details</b></h2></Card.Header>
              <Card.Body className="Enque_card_body">

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" ref="name"  placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" ref="address"  placeholder="Enter Address" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control type="number" ref="mobile"  placeholder="Enter Mobile Number" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Alternative Mobile Number</Form.Label>
                      <Form.Control type="number" ref="alternative_mobile_number"  placeholder="Alternative Mobile Numbe" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control type="email" ref="email"  placeholder="Enter Email Id" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" ref="date"  placeholder="Enter Date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Query</Form.Label>
                      <Form.Control type="text" ref="query"  placeholder="Enter Query" />
                    </Form.Group>

                    <button  type="submit" onClick={this.onCreateNewEnquiry} >Submit</button>
                    <button type="reset" className="ms-3">Cancel</button>

                  </Form>
              </Card.Body>
              </Card>


          </div>
{/* 
          <h2>Enter Enquiry Details.</h2>
          
          <p>
            <label>Name : <input type="text" ref="name"></input></label>
          </p>
          <p>
            <label> Address: <input type="text" ref="address"></input></label>
          </p>
        
          <p>
            <label> Mobile : <input type="number" ref="mobile"></input></label>
          </p>
          <p>
            <label>Alternative Mobile Number: <input type="text" ref="alternative_mobile_number"></input></label>
          </p>
          <p>
            <label>Email Id : <input type="email" ref="email"></input></label>
          </p>
          <p>
            <label> Date : <input type="date" ref="date"></input></label>
          </p>

          <p>
            <label>Query : <input type="text" ref="query"></input></label>
          </p>
        
          <button onClick={this.onCreateNewEnquiry}>Submit</button> */}

    </div>
      )
    }
  }
  export default NewEnquiry;