import React from "react";
import {Form,Button,Card} from 'react-bootstrap';
import './Enquiry.css';
import NavBar from "./NavBar";


class Enquiry2 extends React.Component
{

   

    render()
    {


    return(
        <div>
            <NavBar/>
            <div className="Enque_card">
            
        <Card>
            <Card.Header><h2 className="text-center"><b>ENQUIRY</b></h2></Card.Header>
        <Card.Body className="Enque_card_body">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref="name"  placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} ref="address" placeholder="Enter Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile </Form.Label>
                    <Form.Control type="Number" ref="mobile"  placeholder="Enter Mobile Number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alternative Mobile Number</Form.Label>
                    <Form.Control type="Number" ref="alternative_mobile_number" placeholder="Enter Alternative Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email id</Form.Label>
                    <Form.Control type="email" ref="email" placeholder="Enter Email id" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" ref="date" placeholder="Enter Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Query</Form.Label>
                    <Form.Control as="textarea" rows={3} ref="query" placeholder="Enter Query" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onCreateNewEnquiry} >
                    Submit
                </Button>

                <Button variant="danger" type="reset" className="ms-3">
                    Cancel
                </Button>
            </Form>
        </Card.Body>
        </Card>
            
        </div>
        </div>
    )
    };
}


export default Enquiry2;