import React from 'react';
import NavBar from './NavBar';
export class Studentdel extends React.Component {
      constructor(props)
      {  super(props);
        this.state={Student:{}};
      }
      divStyle = {
        margin: '40px',
        border: '5px solid pink'
      };
async componentWillMount(){
console.log(this.props.match.params.student_id)
      const response=  await fetch("http://localhost:8080/student/search/"+this.props.match.params.student_id);
          const res=await response.json();
          this.setState({Student:res});  
}  
onDelStudent=async(e)=>{
    const result=await fetch("http://localhost:8080/student/delete/"+this.state.Student.student_id,{
method:"Delete"
            
    });   
    alert("Are you sure");     
       console.log(await result.json());
      this.props.history.push("/")
     e.preventDefault();
}

render(){
    return(
        <div>
          <NavBar/>
          <h1></h1>
          
             <p>
            <label>Student ID : {this.state.Student.student_id} </label>
          </p>
          <p>
            <label>Name : {this.state.Student.student_name}</label>
          </p>
          <p>
            <label>Address : {this.state.Student.student_address}</label>
          </p>
          <p>
            <label>Date of Birth :{this.state.Student.student_dob} </label>
       </p>
       <p>
            <label>Age : {this.state.Student.student_student_age}</label>
          </p>
          <p>
            <label>Qualification : {this.state.Student.student_qualification}</label>
          </p>
          <p>
            <label>Mobile : {this.state.Student.student_mobile}</label>
          </p>
          <p>
            <label>UserName : {this.state.Student.student_username}</label>
          </p>
          <p>
            <label>Password : {this.state.Student.student_password}</label>
          </p>
          <p>
            <label>Batch : {this.state.Student.batch_id}</label>
          </p>
          <p>
            <label>Payment_id: {this.state.Student.payment_master_id}</label>
          </p>
         
          <button  onClick={this.onDelStudent}>Delete</button>
                </div>
      );
}  
}
export default Studentdel;