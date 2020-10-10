import React,{useState} from 'react';
import {Container,Row,Col,Form,Button, DropdownButton,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import JA from '../JA.png'


function Login(props){
    const [userType,setuserType] = useState("Student")

    const userTypes = [
        "Student",
        "Volunteer",
        "Admin"
    ]

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

    const onClickHandler = function(type){
        setuserType(type);
    }
    return(
        <Container>
            <Row style={{paddingTop:"20px"}}>
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
                        <DropdownButton
                            variant='info'
                            key='info'
                            id={`dropdown-variants-info`}
                            style={{paddingBottom:"20px"}}
                            title={userType}
                            onSelect={(key,event)=>{setuserType(key)}}
                            >
                            <Dropdown.Item eventKey={userTypes[0]} onClick={() => {window.location = "http://localhost:8900"}}>{userTypes[0]}</Dropdown.Item>
                            <Dropdown.Item eventKey={userTypes[1]}>{userTypes[1]}</Dropdown.Item>
                            <Dropdown.Item eventKey={userTypes[2]}>{userTypes[2]}</Dropdown.Item>
                        </DropdownButton>
                        <Link to={`/root/${userType}`}>
                            <Button variant="primary" type="submit" >
                                Login
                            </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container> 
    )
}

export default Login;