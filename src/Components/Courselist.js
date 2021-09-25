
import React from 'react';
import { Table,Button } from 'react-bootstrap';
import NavBar from './NavBar';
class Courselist extends React.Component {
    
   render() {
        return (
           <div>
              <Courseall/>
           </div>
        ); 
       }
  }
  
  class Courseall extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        Courses: []
      };
    }
    componentDidMount() {
      fetch("http://localhost:8080/course/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Courses: result
          });
        }
      );
    }
    
    render() {
      return (
        <div>
          <NavBar/>
          <div className="reg-btn text-center">
          <Button ariant="outline-light" className="me-3 mb-4 mt-4 reg-button"> <h4><b>OUR COURSES</b></h4></Button>
        </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Syllabus</th>
                <th>Age group</th>
                <th>Course Active </th>
                <th>Coverphoto</th>
                <th>Fees</th>
                
                
              
              </tr>
            </thead>
            <tbody> 
            {this.state.Courses.map(std => (
         <tr key={std.course_id}>
         <td>{std.course_id}</td>
        <td>{std.course_name}</td>
        <td>{std.course_description}</td>
        <td>{std.course_syllabus}</td>
        <td>{std.age_group_type}</td>
        <td>{std.course_is_active}</td>
        <td>{std.course_coverphoto}</td>
        <td>{std.course_fees}</td>
       
        
        
       <td> <a href={'/Course/'+std.course_id}>display</a></td>
       <td> <a href={'/Courseup/'+std.course_id}>Edit</a></td>
       <td> <a href={'/Coursedel/'+std.course_id}>delete</a></td>
       
       
        </tr>
                  ))}  
            </tbody>
            </Table>
        </div>
        );
      }
  }

export default Courselist;


