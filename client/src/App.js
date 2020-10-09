import React,{useState} from 'react';
import {Route,Switch, Redirect,Routes} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Root from './components/Root';
function App() {
  const [isLogin,setisLogin] = useState(false);
  

  return (
    <div className="App" style={{backgroundColor: "#F5F5F7"}}>
      <Switch>
        <Route exact path='/' render={()=>{
            return(
                isLogin?
                <Redirect to="/root"/>:
                <Redirect to="/login"/>
            )
        }}/>
        <Route path="/login"><Login onPress={setisLogin}/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/root"><Root/></Route> 
      </Switch>
    </div>
  );
}


export default App;
