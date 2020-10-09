import React,{useState} from 'react';
import {Container,Row,Col,Form,Button,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import JA from  '../JA.png'

import Login from './Login';
import Signup from './Signup';

export default function Landing(){
    const [key, setKey] = useState('login');
    const wrapperStyle ={
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        // backgroundColor:"blue"
    }
    const rowStyle ={
        textAlign:"center",
        alignItems:"center"
    }
    return(
        <Container style={wrapperStyle}>
            <Row style={{paddingTop:"100px"}}>
                <Col sm={6} style={{width:"50vw",display:"flex",justifyContent:"center"}}>
                    <div style={{paddingTop:"15px"}}>
                        <img src={JA}/>
                    </div>
                </Col>
                <Col sm={6} style={{height:"80vh"}}>
                    <Tabs
                    style={{width:"60%",backgroundColor:"white",backgroundColor:"#ffffff"}}
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
            </Row>
            
    </Container>
    );
}