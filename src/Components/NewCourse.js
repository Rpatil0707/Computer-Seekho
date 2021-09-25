import React from 'react';
class NewCourse extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        Message: ''
      };
    }
    
    onCreateNewCourse=()=>{
      let coursedemo={
            "course_id":this.refs.course_id.value,
            "course_name":this.refs.course_name.value,
            "course_fees":this.refs.course_fees.value,
            "course_description":this.refs.course_description.value,
            "course_syllabus":this.refs.course_syllabus.value,
            "age_group_type":this.refs.age_group_type.value,
            "course_is_active":this.refs.course_is_active.value,
            "course_coverphoto":this.refs.course_coverphoto.value,
            
          
          };
         let demo= JSON.stringify(coursedemo);
          console.log(JSON.parse(demo));
          fetch("http://localhost:8080/course/add",{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: demo
      }).then(r=>{r.json()}).then(res=>{
        if(res){
          this.setState({message:'New NewCourse is Created Successfully'});
        }
      });
      }
    
    render(){
      return(
        <div>
          <h2>Please Enter NewCourse Details...</h2>
          <p>
            <label>Course ID : <input type="text"  ref="course_id"></input></label>
          </p>
          <p>
            <label> Course Name : <input type="text" ref="course_name"></input></label>
          </p>
          <p>
            <label> Description: <input type="text" ref="course_description"></input></label>
          </p>
          <p>
            <label> Syllabus : <input type="text" ref="course_syllabus"></input></label>
          </p>
          <p>
            <label> Age group : <input type="text" ref="age_group_type"></input></label>
          </p>
          <p>
            <label> Course Active : <input type="text" ref="course_is_active"></input></label>
          </p>
          <p>
            <label> Coverphoto : <input type="text" ref="course_coverphoto"></input></label>
          </p>
          <p>
            <label> Fees : <input type="text" ref="course_fees"></input></label>
          </p>
         
        
          <button onClick={this.onCreateNewCourse}>Submit</button>
                </div>
      )
    }
  }
  export default NewCourse;