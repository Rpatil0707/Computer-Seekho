
import React from 'react';
import { Table,Button} from 'react-bootstrap';
import NavBar from './NavBar';


class Enquirylist extends React.Component {
    
   render() {
        return (
           <div>
              <Enquiryall/>
           </div>
        ); 
       }
  }
  
  class Enquiryall extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        Enquiries: []
      };
    }
    componentDidMount() {
      fetch("http://localhost:8080/forms")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Enquiries: result
          });
        }
      );
    }
    
    render() {
      return (
        <div>

          <NavBar/>

          <div className="reg-btn text-center">
          <Button ariant="outline-light" className="me-3 mb-4 mt-4 rveg-button"> <h4><b>Enquiry Data</b></h4></Button>
        </div>
         
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Alternative Mobile Number</th>
                <th>Email Id</th>
                <th>Date</th>
                <th>Query</th>

              </tr>
            </thead>
            <tbody> 
            {this.state.Enquiries.map(Enquiry => (
         <tr key={Enquiry.id}>
         <td>{Enquiry.id}</td>
        <td>{Enquiry.name}</td>
        <td>{Enquiry.address}</td>
        <td>{Enquiry.mobile}</td>
        <td>{Enquiry.alternative_mobile_number}</td>
        <td>{Enquiry.email}</td>
        <td>{Enquiry.date}</td>
        <td>{Enquiry.query}</td>
        
        
       <td> <a href={'/Enquiry/'+Enquiry.id}>display</a></td>
     
       <td> <a href={'/Enquirydel/'+Enquiry.id}>delete</a></td>
       
       
        </tr>
                  ))}  
            </tbody>
            </Table>
        </div>
        );
      }
  }

export default Enquirylist;


