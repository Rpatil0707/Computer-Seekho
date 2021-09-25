import React from 'react';
  
export class Courseup extends React.Component {
      constructor(props)
      {  super(props);
        this.state={Course:{}};
      }
async componentWillMount(){
console.log(this.props)

      const response=  await fetch("http://localhost:8080/course/search/"+this.props.match.params.id);
          const res=await response.json();
          this.setState({Course:res});  
}  
       
     
onCreateCourse=(e)=>{
  let std={
        
        "course_id":this.refs.course_id.value,
        "course_name":this.refs.course_name.value,
        "course_description":this.refs.course_description.value,
        "course_syllabus":this.refs.course_syllabus.value,
        "age_group_type":this.refs.age_group_type.value,
        "course_is_active":this.refs.course_is_active.value,
        "course_coverphoto":this.refs.course_coverphoto.value,
        "course_fees":this.refs.course_fees.value,
        
             }; 
      alert(std.name)
      
      let demo= JSON.stringify(std);
      console.log(JSON.parse(demo));
         fetch("http://localhost:8080/course/update/"+this.props.match.params.id,{
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
            <h2>Please Enter Course Details...</h2>
            <form>
              
            <p>
            <label>Course ID : <input type="text"  ref="course_id" defaultValue={this.state.Course.course_id}></input></label>
          </p>
          <p>
            <label>Course Name : <input type="text" ref="course_name" defaultValue={this.state.Course.course_name}></input></label>
          </p>
          <p>
            <label> Description: <input type="text" ref="course_description" defaultValue={this.state.Course.course_description}></input></label>
          </p>
          <p>
            <label> Syllabus : <input type="text" ref="course_syllabus" defaultValue={this.state.Course.course_syllabus}></input></label>
          </p>
          <p>
            <label> Age group : <input type="text" ref="age_group_type" defaultValue={this.state.Course.age_group_type}></input></label>
          </p>
          <p>
            <label> Course Active : <input type="text" ref="course_is_active" defaultValue={this.state.Course.course_is_active}></input></label>
          </p>
          <p>
            <label> Coverphoto : <input type="text" ref="course_coverphoto" defaultValue={this.state.Course.course_coverphoto}></input></label>
          </p>
          <p>
            <label> Fees : <input type="text" ref="course_fees" defaultValue={this.state.Course.course_fees}></input></label>
          </p>
         
           
            <button type= "button" onClick={this.onCreateCourse}>Create</button>
            </form>
                  </div>
        );
  }  
}
