import React from 'react';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import "./Enquiry.css";
  
  export function Enquiry(props) {
      
    const [enquiry,setEnquiry]=useState({});
    const {id} = useParams()
      useEffect(()=> {
          fetch("http://localhost:8080/forms/search/"+id)
          .then(res => res.json())
          .then( (result) => {setEnquiry(result);}
          );
      },{});

      
       
        return (
          <>
         {/* <div >

           
<label>Id:</label>
{enquiry.id}<br/>
<label>Name:</label>
{enquiry.name}<br/>
<label>Address</label>
{enquiry.address}<br/>
<label>Mobile:</label>
{enquiry.mobile}<br/>
<label>Alternative Mobile Number:</label>
{enquiry.alternative_mobile_number}<br/>
<label>Email:</label>
{enquiry.email}<br/>
<label>Date:</label>
{enquiry.date}<br/>
<label>Query:</label>
{enquiry.query}<br/>


         </div> */}

<div>
<div className="container" style={{color:"black"}}>
    <div className='row'>
        <div className = 'card col-md-6 offset-md-3 offset-md-3' style={{backgroundColor:"skyblue"}}>
            <h3 className = "text-center"> Enquiry Form </h3>
             <div className = "card-body">
                 <form action="">
                     <div className = "form-group">
                         <label> Id:</label>

                         <input placeholder="Id" name ="id" className="form-control" value = {enquiry.id}
                             />
                     </div>

                     <div className = "form-group">
                         <label>  Name</label>

                         <input placeholder= "Name" name ="Name" className="form-control"
                            value = {enquiry.name} />
                     </div>
                     <div className = "form-group">
                         <label>Address</label>

                         <input placeholder= "Address" name ="Address" className="form-control"
                            value = {enquiry.address} />
                     </div>


                     <div className = "form-group">
                         <label>Mobile </label>

                         <input placeholder="Mobile" name ="Mobile" className="form-control"
                            value = {enquiry.mobile} />
                     </div>
                     <div className = "form-group">
                         <label>Alternative Mobile Number</label>

                         <input placeholder="Mobile no (alternative)" name ="Alternative Mobile Number" className="form-control"
                            value = {enquiry.alternative_mobile_number} />
                     </div>
                     <div className = "form-group">
                         <label>Email </label>

                         <input placeholder="Email" name ="Email" className="form-control"
                            value = {enquiry.email} />
                     </div>
                     <div className = "form-group">
                         <label>Date </label>

                         <input placeholder="Date" name ="Date" className="form-control"
                            value = {enquiry.date} />
                     </div>
                     <div className = "form-group">
                         <label>Query</label>

                         <input placeholder="Query" name ="Query" className="form-control"
                            value = {enquiry.query} />
                     </div>

{/* 
                 <button className= "btn btn-success" onClick= {this.updateEmployee}>Save</button>
                 <button className= "btn btn-danger" onClick= {this.cancel.bind(this)} style= {{marginLeft: "10px"}}>Cancle</button> */}
                 </form>

             </div>

        </div>
    </div>
</div>
</div>
</>
          );
  }

 
  
 
