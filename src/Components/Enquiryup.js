import React from 'react';
  
export class Enquiryup extends React.Component {
      constructor(props)
      {  super(props);
        this.state={Enquiry:{}};
      }
async componentWillMount(){
console.log(this.props)

      const response=  await fetch("http://localhost:8080/forms"+this.props.match.params.id);
          const res=await response.json();
          this.setState({Enquiry:res});  
}  
       
     
onCreateEnquiry=(e)=>{
  let std={
        
        "id":this.refs.id.value,
        "name":this.refs.name.value,
        "address":this.refs.address.value,
        "mobile":this.refs.mobile.value,
        "alternative_mobile_number":this.refs.alternative_mobile_number.value,
        "email":this.refs.email.value,
        "date":this.refs.date.value,
        "query":this.refs.query.value,

             }; 
      alert(std.name)
      
      let demo= JSON.stringify(std);
      console.log(JSON.parse(demo));
         fetch("http://localhost:8080/Project/ Enquiry/update/"+this.props.match.params.id,{
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
            <h2>Please Enter  Enquiry Details...</h2>
            <form>
              
            <p>
            <label> Enquiry ID : <input type="number"  ref="id" defaultValue={this.state.Enquiry.id}></input></label>
          </p>
          <p>
            <label>Name : <input type="text" ref="name" defaultValue={this.state.Enquiry.name}></input></label>
          </p>
          <p>
            <label> Address: <input type="text" ref="address" defaultValue={this.state.Enquiry.address}></input></label>
          </p>
          <p>
            <label> Mobile : <input type="number" ref="mobile" defaultValue={this.state.Enquiry.mobile}></input></label>
          </p>
          <p>
            <label>Alternative Mobile Number : <input type="number" ref="alternative_mobile_number" defaultValue={this.state.Enquiry.alternative_mobile_number}></input></label>
          </p>
          <p>
            <label> Email Id: <input type="email" ref="email" defaultValue={this.state.Enquiry.email}></input></label>
          </p>
          <p>
            <label> Date: <input type="date" ref="date" defaultValue={this.state.Enquiry.date}></input></label>
          </p>

          <p>
            <label>query: <input type="text" ref="query" defaultValue={this.state.Enquiry.query}></input></label>
          </p>
           
            <button type= "button" onClick={this.onCreateEnquiry}>Create</button>
            </form>
                  </div>
        );
  }  
}
