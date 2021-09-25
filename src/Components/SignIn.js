import React from 'react';
import axios from 'axios';
  class SignIn extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        Message: '',
        adminname: "",
        password: "",
        data: [],
      };
    }
    componentDidMount(){
      axios.get("http://localhost:8080/admins/search/allusers")
      .then((res)=>{
        this.setState({data:res.data})
        
      })
    }
    
            

    onSignIn=async()=>{
      let Empdemo={
        "adminname":this.refs.adminname.value,
        "password":this.refs.password.value,
        
          };
          // console.log("emp",this.state.data);
          await this.state.data.forEach((ele)=>{
            if(ele.adminname == this.refs.adminname.value && ele.password == this.refs.password.value){
              this.setState({adminname:ele.adminname})
              this.setState({password:ele.password})
              // console.log("valid user");
            }
          })
          if(this.state.adminname != ""){
            console.log("valid user");
            sessionStorage.setItem("user",this.state.adminname)
            
          }
          else{
            console.log("invalid user");

          }
      }
      onLogout = ()=>{
        sessionStorage.removeItem("user")
      }

    
    render(){
      return(
        <div>
          <h2>SignIn</h2>
          <p>
          <label >Email-Id : </label>
        <input type="email" ref="adminname" className="form-control"  ></input>
            </p>
  
            <p>
            <label>password : </label>
           <input type="text" ref="password" className="form-control"  ></input>
            </p>
  
           
  
            <button type="submit" onClick={this.onSignIn}>Signin</button>
            <button onClick={this.onSignIn}>Signup</button>
            <button onClick={this.onLogout}>logout</button>
          
                </div>
      )
    }
  }
  
  export default SignIn ;