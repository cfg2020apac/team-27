import React,{useState} from 'react';
import {Container,Row,Col,Form,Button,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import JA from  '../JA.png'

import Login from './Login';
import Signup from './Signup';

export default function Landing(){
    const [key, setKey] = useState('login');
    const wrapperStyle ={
        // height:"100vh",
        // width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // textAlign:"center",
        // backgroundColor:"blue"
    }

    return(
        <Container style={wrapperStyle} fluid>
            <div style={{paddingTop:"100px", width: "100%"}}>
                <Col className="mr-0 pr-0 mb-5" xs={11} sm={11}>
                    <div className="d-flex flex-row justify-content-center">
                        <img src={JA} style={{height: "150px"}}/>
                    </div>
                </Col>
                <Col className="mr-0 pr-0" xs={11} sm={11} style={{height: "80vh"}}>
                    <Tabs
                    style={{backgroundColor:"white",backgroundColor:"#ffffff"}}
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    >
                    <Tab eventKey="login" title="Login">
                        <Login/>
                    </Tab>
                    <Tab eventKey="signup" title="SignUp">
                        <Signup />
                    </Tab>
                </Tabs>
                </Col>
            </div>
            
    </Container>
    );
}