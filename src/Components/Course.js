import React from 'react';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import NavBar from './NavBar';
  
  export function Course(props) {
      
    const [course,setCourse]=useState({});
    const {course_id} = useParams()
      useEffect(()=> {
          fetch("http://localhost:8080/course/search/"+course_id)
          .then(res => res.json())
          .then( (result) => { setCourse(result);   }
          );
      },{});
       
        return (
          <>
        

<div>
  <NavBar/>
 <div className="container mt-4" style={{color:"black"}}>
    <div className='row'>
        <div className = 'card col-md-6 offset-md-3 offset-md-3'style={{backgroundColor:"skyblue"}}>
            <h1 className = "text-center">  Course Data </h1>
             <div className = "card-body">
                 <form action="">
                     <div className = "form-group">
                         <label>  Course ID :</label>

                         <input placeholder="Id" name ="id" className="form-control" value = {course.course_id}
                             />
                     </div>

                     <div className = "form-group">
                         <label>Name :</label>

                         <input placeholder= "Name" name ="Name" className="form-control"
                            value =  {course.course_name} />
                     </div>
                     <div className = "form-group">
                         <label>Course Description</label>

                         <input placeholder= "Course Description" name ="Course Description" className="form-control"
                            value =   {course.course_description} />
                     </div>
                     <div className = "form-group">
                         <label>Course Syllabus</label>

                         <input placeholder= "Course Syllabus" name ="Course Syllabus" className="form-control"
                            value =  {course.course_syllabus}/>
                     </div>


                     <div className = "form-group">
                         <label>Age Group Type </label>

                         <input placeholder="Age Group Type" name ="Age Group Type " className="form-control"
                            value = {course.age_group_type} />
                     </div>

                     <div className = "form-group">
                         <label>Course is Active</label>

                         <input placeholder="Course is Active" name ="Course is Active" className="form-control"
                            value ={course.course_is_active} />
                     </div>
                     <div className = "form-group">
                         <label>Course Coverphoto </label>

                         <input placeholder="Course Coverphoto" name ="Course Coverphoto" className="form-control"
                            value =  {course.course_coverphoto} />
                     </div>

                     <div className = "form-group">
                         <label>Course Fees </label>

                         <input placeholder="Course Fees " name ="Course Fees " className="form-control"
                            value = {course.course_fees} />
                     </div>
                     
                     
{/* 
                 <button className= "btn btn-success" onClick= {this.updateEmployee}>Save</button>*/}
                 {/* <button className= "btn btn-danger" onClick= {this.onDelStudent} style= {{marginLeft: "10px"}}>Delete</button>  */}
                 </form>

             </div>

        </div>
    </div>
</div>
</div>


</>
          );
  }
  
 
