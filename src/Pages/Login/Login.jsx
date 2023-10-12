import React from "react"; 

import {Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'; 
import {Link} from 'react-router-dom' 
import '../Login/Login.css'
import loginImg from'../../Assets/login1.png'
import userIcon from '../../Assets/login.jpg'
import { useState } from "react";


const Login = () =>{
    const[credentials, setCredentials]= useState({
       email:undefined,
       password:undefined,
    });
    const handleChange = e =>{
        setCredentials(prev =>({ ...prev,[e.target.id]: e.target.value}));
    };

    const handleClick = e=>{
        e.preventDefault();
    }
    return (
    <section>
        <Container>
            <Row>
                <Col lg='8' clasNmae="m-auto">
                    <div className="login_container d-flex justify-content-between">
                        <div className="login__img">

                            <img src={loginImg} alt=""/>

                        </div>
                        <div className="login_form">
                            <div className="user">
                                <img src={userIcon}alt=""/>
                            </div>
                            <h2>Login</h2>
                            <Form onSubmit={handleClick}>
                               <FormGroup>
                                <input type="email" placeholder="Email" required id="email" onChange={handleChang}/>
                                </FormGroup>
                               <FormGroup>
                                <input type="password" placeholder="Password" required id="password" onChange={handleChange}/>
                                </FormGroup> 
                                <Button className="btn secondary__btn auth__btn" type="submit">Login
                                </Button>
                            </Form>
                            <p>Don't have an account?<Link to='/register'>Create</Link></p>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
};
export default Login;