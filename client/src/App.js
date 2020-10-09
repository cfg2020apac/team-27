import React,{useState} from 'react';
import {Route,Switch, Redirect,Routes} from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import Landing from './components/Landing/Landing';

function App() {
  const [isLogin,setisLogin] = useState(false);
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={()=>{
            return(
                <Redirect to="/landing"/>
            )
        }}/>
        {/* <Route path="/login"><Login onPress={setisLogin}/></Route>
        <Route path="/signup"><Signup/></Route> */}
        <Route path="/root/:userType"><Root/></Route> 
        <Route path="/landing"><Landing/></Route> 
      </Switch>
    </div>
  );
}


export default App;
