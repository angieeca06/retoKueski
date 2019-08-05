import React from 'react';
import Login from './component/login';
import {HashRouter, Route, Switch} from "react-router-dom";

const App = ()=>{

  return(
    <HashRouter basename="/">
       <div className="App">
         <Switch>
           <Route exact path="/" render={() => <Login />}/>
         </Switch>
       </div>
     </HashRouter>
  )
}

export default App;
