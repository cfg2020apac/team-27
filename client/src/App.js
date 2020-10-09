import React,{useState} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Root from './components/Root';
function App() {
  const [isLogin,setisLogin] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={()=>{
            return(
              <Redirect to="/root"/>
                // isLogin?
                // <Redirect to="/login"/>:
                // <Redirect to="/signup"/>
            )
        }}/>
        <Route path="/login"><Login/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/root" ><Root/></Route> 
      </Switch>
    </div>
  );
}


export default App;
