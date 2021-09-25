import React from 'react';
  
export class Studentup extends React.Component {
      constructor(props)
      {  super(props);
        this.state={Student:{}};
      }
async componentWillMount(){
console.log(this.props)

      const response=  await fetch("http://localhost:8080/Project/student/search/"+this.props.match.params.id);
          const res=await response.json();
          this.setState({Student:res});  
}  
       
     
onCreateStudent=(e)=>{
  let std={
        
        "student_id":this.refs.student_id.value,
        "student_name":this.refs.student_name.value,
        "student_address":this.refs.student_address.value,
        "student_gender":this.refs.student_gender.value,
        "student_dob":this.refs.student_dob.value,
        "student_age":this.refs.student_age.value,
        "student_qualification":this.refs.student_qualification.value,
        "student_mobile":this.refs.student_mobile.value,
        "student_password":this.refs.student_password.value,
        "student_username":this.refs.student_username.value,
        "batch_id":this.refs.batch_id.value,
        "payment_master_id":this.refs.payment_master_id.value,

             }; 
      alert(std.name)
      
      let demo= JSON.stringify(std);
      console.log(JSON.parse(demo));
         fetch("http://localhost:8080/Project/student/update/"+this.props.match.params.id,{
        method: 'PUT',
        headers:{'Content-type':'application/json'},
          body: demo
      }).then(r=>{console.log(r.json())})
      this.props.history.push("/")
    e.preventDefault();
    }

        
    render(){
      return(
          <div>
            <h2>Please Enter Student Details...</h2>
            <form>
              
            <p>
            <label>Student ID : <input type="text"  ref="student_id" defaultValue={this.state.Student.student_id}></input></label>
          </p>
          <p>
            <label>Name : <input type="text" ref="student_name" defaultValue={this.state.Student.student_name}></input></label>
          </p>
          <p>
            <label> Address: <input type="text" ref="student_address" defaultValue={this.state.Student.student_address}></input></label>
          </p>
          <p>
            <label> Gender : <input type="text" ref="student_gender" defaultValue={this.state.Student.student_gender}></input></label>
          </p>
          <p>
            <label> Date of Birth : <input type="text" ref="student_dob" defaultValue={this.state.Student.student_dob}></input></label>
          </p>
          <p>
            <label> Age : <input type="text" ref="student_age" defaultValue={this.state.Student.student_age}></input></label>
          </p>
          <p>
            <label> Qualification : <input type="text" ref="student_qualification" defaultValue={this.state.Student.student_qualification}></input></label>
          </p>
          <p>
            <label> Mobile : <input type="text" ref="student_mobile" defaultValue={this.state.Student.student_mobile}></input></label>
          </p>
          <p>
            <label> Username : <input type="text" ref="student_username" defaultValue={this.state.Student.student_username}></input></label>
          </p>
          <p>
            <label> Password : <input type="text" ref="student_password" defaultValue={this.state.Student.student_password}></input></label>
          </p>
          <p>
            <label> Batch No : <input type="text" ref="batch_id" defaultValue={this.state.Student.batch_id}></input></label>
          </p>

          <p>
            <label>Payment_id  : <input type="text" ref="payment_master_id" defaultValue={this.state.Student.payment_master_id}></input></label>
          </p>
           
            <button type= "button" onClick={this.onCreateStudent}>Create</button>
            </form>
                  </div>
        );
  }  
}
