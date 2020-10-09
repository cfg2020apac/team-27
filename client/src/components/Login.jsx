import React,{useState} from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import JA from '../JA.png'
function Login(props){

    const wrapperStyle ={
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
    }
    const rowStyle ={
        textAlign:"center",
        alignItems:"center"
    }

    function onPressedButton(){
        props.onClick(true);
        console.log("ButtonClicked")
    }
    return(
        <Container style={wrapperStyle}>
            <img src={JA}/>
            <Container style={{width:"60%",backgroundColor:"white",height:"32%",backgroundColor:"#ffffff"}}>
                <Row style={{padding:"20px"}}>
                    <Col sm={12} style={{fontSize:30,fontWeight:"bold"}}>LOGIN</Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={onPressedButton}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container> 
        </Container>
    )
}

export default Login;