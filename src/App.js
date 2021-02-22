import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter,Route} from "react-router-dom";
import CourseEditor from "./components/course-editor";
import Home from "./components/home"


function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path='/' exact={true} component={Home}/>
              <Route path='/courses' component={CourseManager}/>
              <Route path='/editor' exact={true}
                     render={(props)=> <CourseEditor {...props}/>}/>
          </div>

      </BrowserRouter>

  );
}

export default App;
