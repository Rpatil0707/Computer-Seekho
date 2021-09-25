import React from 'react';
import {  BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
 import Enquirylist from './Enquirylist';
 import Enquirydel from './Enquirydel';
 import {Enquiry} from './Enquiry';
 import {Enquiryup} from './Enquiryup';
//  import Nomatch from './Nomatch';
import NewEnquiry from './NewEnquiry';

class EnquiryApp extends React.Component {
   render() {
      return (
         <Router>   
             <div>     
              <nav>
               <ul>   
                 <li> <Link to="/Enquirylist">Enquirer List</Link> </li>
                 <li> <Link to="/NewEnquiry">Register Enquiry</Link> </li>
               </ul>     
               </nav>
     
             {/* A <Switch> looks through its children <Route>s and
                 renders the first one that matches the current URL. */}
             <Switch>
            
              <Route path="/enquirydel/:id" 
                render={(props) =>
                  <Enquirydel {...props} key={props.match.params.id} />
                 }>
                </Route>
               <Route path="/enquirylist">
                 <Enquirylist/>
               </Route> 
               <Route path="/studentup/:id" 
                render={(props) =>
                  <Enquiryup {...props} key={props.match.params.id} />
                 }>
                </Route> 
              
               <Route path="/enquiry/:id">
               <Enquiry/>
               </Route>
               <Route path="/newenquiry">

                 <NewEnquiry/>

                   </Route>

                      
             {/* <Route path="*">
              <Nomatch/>
            </Route> */}
           </Switch>
           </div>
         </Router>
       );
        
   }
}
export default EnquiryApp;
