import React from 'react';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
  
  export function Student(props) {
      
    const [student,setStudent]=useState({});
    const {student_id} = useParams()
      useEffect(()=> {
          fetch("http://localhost:8080/student/search/"+student_id)
          .then(res => res.json())
          .then( (result) => { setStudent(result);   }
          );
      },{});
       
        return (
          <>

          
<div>
 <div className="container" style={{color:"black"}}>
    <div className='row'>
        <div className = 'card col-md-6 offset-md-3 offset-md-3'style={{backgroundColor:"yellow"}}>
            <h1 className = "text-center"> Student Data ... </h1>
             <div className = "card-body">
                 <form action="">
                     <div className = "form-group">
                         <label>  ID :</label>

                         <input placeholder="Id" name ="id" className="form-control" value = {student.student_id}
                             />
                     </div>

                     <div className = "form-group">
                         <label>Name :</label>

                         <input placeholder= "Name" name ="Name" className="form-control"
                            value = {student.student_name} />
                     </div>
                     <div className = "form-group">
                         <label>Address</label>

                         <input placeholder= "Address" name ="Address" className="form-control"
                            value =  {student.student_address} />
                     </div>
                     <div className = "form-group">
                         <label>Gender</label>

                         <input placeholder= "Gender" name ="Gender" className="form-control"
                            value =  {student.student_gender} />
                     </div>


                     <div className = "form-group">
                         <label>Date of Birth  </label>

                         <input placeholder="Date of Birth " name ="Date of Birth " className="form-control"
                            value = {student.student_dob} />
                     </div>

                     <div className = "form-group">
                         <label>Age:</label>

                         <input placeholder="Age" name ="Age" className="form-control"
                            value = {student.student_age} />
                     </div>
                     <div className = "form-group">
                         <label>Qualification: </label>

                         <input placeholder="Qualification" name ="Qualification" className="form-control"
                            value = {student.student_qualification} />
                     </div>

                     <div className = "form-group">
                         <label>Mobile: </label>

                         <input placeholder="Mobile" name ="Mobile" className="form-control"
                            value = {student.student_mobile} />
                     </div>
                     
                     <div className = "form-group">
                         <label>Username:</label>

                         <input placeholder="Username" name ="Username" className="form-control"
                            value ={student.student_username} />
                     </div>
                     <div className = "form-group">
                         <label>Password:</label>

                         <input placeholder="Password" name ="Username" className="form-control"
                            value ={student.student_username} />
                     </div>
                    
                     <div className = "form-group">
                         <label>Batch:</label>

                         <input placeholder="Batch" name ="Batch" className="form-control"
                            value = {student.batch_id} />
                     </div>
                     <div className = "form-group">
                         <label>Payment_id:</label>

                         <input placeholder="Payment_id" name ="Payment_id" className="form-control"
                            value ={student.payment_master_id}/>
                     </div>

{/* 
                 <button className= "btn btn-success" onClick= {this.updateEmployee}>Save</button>*/}
                 {/* <button className= "btn btn-danger" onClick= {this.onDelEnquiry} style= {{marginLeft: "10px"}}>Delete</button>  */}
                 </form>

             </div>

        </div>
    </div>
</div>
</div>
         </>
          );
  }
  
 
