import React from 'react';
export class Enquirydel extends React.Component {
      constructor(props)
      {  super(props);
        this.state={enquiry:{}};
      }
      divStyle = {
        margin: '40px',
        border: '5px solid pink'
      };
async componentWillMount(){
console.log(this.props.match.params.id)
      const response=  await fetch("http://localhost:8080/forms/search/"+this.props.match.params.id);
          const res=await response.json();
          this.setState({ enquiry:res});  
}  
onDelEnquiry=async(e)=>{
    const result=await fetch("http://localhost:8080/forms/delete/"+this.state.enquiry.id,{
method:"Delete"

    });        
       console.log(await result.json());
      this.props.history.push("/")
     e.preventDefault();
}

render(){
    return(
        <div>
          <h1 style={this.divStyle}>R you sure???..</h1>
          
             <p>
            <label> enquiry ID : {this.state.enquiry.id} </label>
          </p>
          <p>
            <label>Name : {this.state.enquiry.name}</label>
          </p>
          <p>
            <label>Address : {this.state.enquiry.address}</label>
          </p>
          <p>
            <label>Mobile:{this.state.enquiry.mobile} </label>
       </p>
       <p>
            <label>Alternative Mobile Number : {this.state.enquiry.alternative_mobile_number}</label>
          </p>
          <p>
            <label>Email Id : {this.state.enquiry.email}</label>
          </p>
          <p>
            <label>Date : {this.state.enquiry.date}</label>
          </p>
          <p>
            <label>Query : {this.state.enquiry.query}</label>
          </p>
         
         
          <button  onClick={this.onDelEnquiry}>Delete</button>
                </div>
      );
}  
}
export default  Enquirydel;