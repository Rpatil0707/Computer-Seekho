
import React from 'react';
import {Table,Button} from 'react-bootstrap';
import NavBar from './NavBar';
class Studentlist extends React.Component {
    
   render() {
        return (
           <div>
              <Studentall/>
           </div>
        ); 
       }
  }
  
  class Studentall extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        Students: []
      };
    }
    componentDidMount() {
      fetch("http://localhost:8080/student")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Students: result
          });
        }
      );
    }
    
    render() {
      return (
        <div>
          <NavBar/>

          <div className="reg-btn text-center">
          <Button ariant="outline-light" className="me-3 mb-4 mt-4 rveg-button"> <h4><b>Student List</b></h4></Button>
        </div>

<Table  striped bordered hover >
  <thead className="text-center">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Gender</th>
        <th>Date Of Birth</th>
        <th>Age</th>
        <th>Qualification</th>
        <th>Mobile </th>
        <th>UserName</th>
        <th>Password </th>
        <th>Batch </th>
        <th>Payment_id </th>

    </tr>
  </thead>
  <tbody> 
            {this.state.Students.map(std => (
         <tr key={std.student_id}>
         <td>{std.student_id}</td>
        <td>{std.student_name}</td>
        <td>{std.student_address}</td>
        <td>{std.student_gender}</td>
        <td>{std.student_dob}</td>
        <td>{std.student_age}</td>
        <td>{std.student_qualification}</td>
        <td>{std.student_mobile}</td>
        <td>{std.student_username}</td>
        <td>{std.student_password}</td>
        <td>{std.batch_id}</td>
        <td>{std.payment_master_id}</td>
        
        
       <td> <a href={'/Student/'+std.student_id}>display</a></td>
       <td> <a href={'/Studentup/'+std.student_id}>Edit</a></td>
       <td> <a href={'/Studentdel/'+std.student_id}>delete</a></td>
       
       
        </tr>
                  ))}  
  </tbody>
</Table> 
        </div>
        );
      }
  }

export default Studentlist;