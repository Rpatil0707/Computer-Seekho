
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import Login from './Components/Login';
// import Enquiry2 from './Components/Enquiry2';
import Demo from './Components/Demo';
import Aboutus from './Components/Aboutus';
import NewEnquiry from './Components/NewEnquiry';
import NewStudent from './Components/NewStudent';
import Studentlist from './Components/Studentlist';
import Admin from './Components/Admin';
import { Studentup } from './Components/Studentup';
import { Student } from './Components/Student';
import Studentdel from './Components/Studentdel';
import Enquirylist from './Components/Enquirylist';
import Enquirydel from './Components/Enquirydel';
import {Enquiry} from './Components/Enquiry';
import {Enquiryup} from './Components/Enquiryup';
import NewCourse from './Components/NewCourse';
import Courselist from './Components/Courselist';
import Courselistview from './Components/Courselst';
import Coursedel from './Components/Coursedel';
import { Courseup } from './Components/Courseup';
import { Course } from './Components/Course';
import Login from './Components/Login';
import SignIn from './Components/SignIn';
import LoginPage from './Components/LoginPage';
import Gallery from './Components/Gallery';
import MSCIT from './Components/MSCIT';
import Dac from './Components/Dac';
import Dbda from './Components/Dbda';




function App() 
{
  return (
            <div className="backgroundcolor">
              {/* <Home/> */}
             
              
              <Router>
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/Admin" component={Admin}></Route>
                  {/* <Route exact path="/Enquiry2" component={Enquiry2}></Route> */}
                  <Route exact path="/Aboutus" component={Aboutus}></Route>
                  <Route exact path="/Courselist" component={Courselist}></Route>
                  <Route exact path="/Courselist" component={Courselist}></Route>
                  <Route exact path="/Courselistview" component={Courselistview}></Route>
                  <Route exact path="/NewEnquiry" component={NewEnquiry}></Route>
                  <Route exact path="/NewStudent" component={NewStudent}></Route>
                  <Route path="/Studentlist" component={Studentlist}></Route>
                  <Route path="/Enquirylist" component={Enquirylist}></Route>
                  <Route path="/NewCourse" component={NewCourse}></Route>
                  <Route path="/Login" component={Login}></Route>
                  <Route path="/SignIn" component={SignIn}></Route>
                  <Route path="/LoginPage" component={LoginPage}></Route>
                  <Route path="/Gallery" component={Gallery}></Route>
                  

                  <Route exact path="/Demo" component={Demo}></Route>

                  <Route path="/studentup/:id" 
                render={(props) =>
                  <Studentup {...props} key={props.match.params.student_id} />
                 }>
                </Route>

                <Route path="/student/:student_id">
               <Student/>
               </Route>

               <Route path="/studentdel/:student_id" 
                render={(props) =>
                  <Studentdel {...props} key={props.match.params.student_id} />
                 }>
                </Route> 

                <Route path="/MSCIT">
               <MSCIT/>
               </Route>
               <Route path="/Dac">
               <Dac/>
               </Route>

               <Route path="/Dbda">
               <Dbda/>
               </Route>

               
              
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
             

               
               

                

                </Switch>
              </Router>
              
            

              
             
            </div>
  );
}

export default App;
