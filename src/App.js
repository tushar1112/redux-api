import React from 'react';
import './App.css';
import Getdata from './components/getdata';
import "bootstrap/dist/css/bootstrap.min.css";
import ShowData from './components/showData';
import ShowAnotherData from './components/showAnotherData';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

function App() {
  return (
     <Router>
           <div>
               <button>
                   <Link to="/showdata">
                      get data from api 1 (using middleware)
                   </Link>
               </button>
               <button>
                   <Link to="/showAnotherData">
                      get data from api 2 (without middleware)
                   </Link>
               </button>
           </div>
           <Switch>
               <Route path="/showdata" exact component={ShowData}></Route>
               <Route path="/showAnotherData" exact component={ShowAnotherData}></Route>
           </Switch>
       </Router>
  );
}

export default App;
