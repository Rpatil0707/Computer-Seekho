import React from 'react';
export class Coursedel extends React.Component {
      constructor(props)
      {  super(props);
        this.state={Course:{}};
      }
      divStyle = {
        margin: '40px',
        border: '5px solid pink'
      };
async componentWillMount(){
console.log(this.props.match.params.course_id)
      const response=  await fetch("http://localhost:8080/course/search/"+this.props.match.params.course_id);
          const res=await response.json();
          this.setState({Course:res});  
}  
onDelCourse=async(e)=>{
    const result=await fetch("http://localhost:8080/course/delete/"+this.state.Course.course_id,{
method:"Delete"

    });        
       console.log(await result.json());
      this.props.history.push("/")
     e.preventDefault();
}

render(){
    return(
      <>
        


<div>
 <div className="container" style={{color:"black"}}>
    <div className='row'>
        <div className = 'card col-md-6 offset-md-3 offset-md-3'style={{backgroundColor:"skyblue"}}>
            <h1 className = "text-center"> Do you Want to Delete this Course Data ? ... </h1>
             <div className = "card-body">
                 <form action="">
                     <div className = "form-group">
                         <label>  Course ID :</label>

                         <input placeholder="Id" name ="id" className="form-control" value = {this.state.Course.course_id}
                             />
                     </div>

                     <div className = "form-group">
                         <label>Name :</label>

                         <input placeholder= "Name" name ="Name" className="form-control"
                            value =  {this.state.Course.course_name} />
                     </div>
                     <div className = "form-group">
                         <label>Course Description</label>

                         <input placeholder= "Course Description" name ="Course Description" className="form-control"
                            value =   {this.state.Course.course_description} />
                     </div>
                     <div className = "form-group">
                         <label>Course Syllabus</label>

                         <input placeholder= "Course Syllabus" name ="Course Syllabus" className="form-control"
                            value =  {this.state.Course.course_syllabus}/>
                     </div>


                     <div className = "form-group">
                         <label>Age Group Type </label>

                         <input placeholder="Age Group Type" name ="Age Group Type " className="form-control"
                            value = {this.state.Course.age_group_type} />
                     </div>

                     <div className = "form-group">
                         <label>Course is Active</label>

                         <input placeholder="Course is Active" name ="Course is Active" className="form-control"
                            value ={this.state.Course.course_is_active} />
                     </div>
                     <div className = "form-group">
                         <label>Course Coverphoto </label>

                         <input placeholder="Course Coverphoto" name ="Course Coverphoto" className="form-control"
                            value =  {this.state.Course.course_coverphoto} />
                     </div>

                     <div className = "form-group">
                         <label>Course Fees </label>

                         <input placeholder="Course Fees " name ="Course Fees " className="form-control"
                            value = {this.state.Course.course_fees} />
                     </div>
                     
                     <button className= "btn btn-danger"  onClick={this.onDelCourse}>Delete</button>
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
}
export default Coursedel;