import React from 'react';
import {  BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import Home from './Home';
 import Studentlist from './Studentlist';
 import About from './About';
 import Studentdel from './Studentdel';
 import {Student} from './Student';
 import {Studentup} from './Studentup';
 import Nomatch from './Nomatch';
 import NewStudent from './NewStudent';

class StudentApp extends React.Component {
   render() {
      return (
         <Router>   <div>      <nav>
               <ul>  
                 <li> <Link to="/Studentlist">Student List</Link> </li>
                 <li> <Link to="/NewStudent">Register Student</Link> </li>
               </ul>     </nav>
     
             {/* A <Switch> looks through its children <Route>s and
                 renders the first one that matches the current URL. */}
             <Switch>
             <Route  exact path="/">
                 <Home/>
              </Route>
              <Route path="/studentdel/:student_id" 
                render={(props) =>
                  <Studentdel {...props} key={props.match.params.student_id} />
                 }>
                </Route> 
           
             <Route path="/About">
                 <About/>
               </Route>
               <Route path="/studentlist">
                 <Studentlist/>
               </Route> 
               <Route path="/studentup/:id" 
                render={(props) =>
                  <Studentup {...props} key={props.match.params.student_id} />
                 }>
                </Route> 
              
               <Route path="/student/:student_id">
               <Student/>
               </Route>
               <Route path="/newstudent">

                 <NewStudent/>

                   </Route>

                      
             <Route path="*">
              <Nomatch/>
            </Route>
           </Switch>
           </div>
         </Router>
       );
        
   }
}
export default StudentApp;
