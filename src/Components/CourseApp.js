import React from 'react';
import {  BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";

 import Courselist from './Courselist';

 import Coursedel from './Coursedel';
 import {Course} from './Course';
 import {Courseup} from './Courseup';
 
 import NewCourse from './NewCourse';

class CourseApp extends React.Component {
   render() {
      return (
         <Router>   <div>      <nav>
               <ul>  
                 <li> <Link to="/Courselist">Course List</Link> </li>
                 <li> <Link to="/NewCourse">Register Course</Link> </li>
               </ul>     </nav>
     
             {/* A <Switch> looks through its children <Route>s and
                 renders the first one that matches the current URL. */}
             <Switch>
          
              <Route path="/coursedel/:course_id" 
                render={(props) =>
                  <Coursedel {...props} key={props.match.params.course_id} />
                 }>
                </Route> 
           
             
              
               <Route path="/courselist">
                 <Courselist/>
               </Route> 
               <Route path="/courseup/:id" 
                render={(props) =>
                  <Courseup {...props} key={props.match.params.course_id} />
                 }>
                </Route> 
              
               <Route path="/course/:course_id">
               <Course/>
               </Route>
               <Route path="/newcourse">

                 <NewCourse/>

                   </Route>

          
           </Switch>
           </div>
         </Router>
       );
        
   }
}
export default CourseApp;

