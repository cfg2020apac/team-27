import React,{useState} from 'react';
import {Route,Switch, Redirect,Routes} from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import Landing from './components/Landing/Landing';

function App() {
  const [isLogin,setisLogin] = useState(false);
  

  return (
    <div className="App" style={{backgroundColor: "#F5F5F7"}}>
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
        <Route path='/external' component={() => { 
            window.location.href = 'http://localhost:8900'; 
            return null;
        }}/>
      </Switch>
    </div>
  );
}


export default App;
