import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import './LogIn.css';
const LogIn = () => {
    const[email,setEmail] = useState(' ');
    const[password,setPassword] = useState(' ');
    const[error,setError] = useState(' ');
    const auth = getAuth();
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleLogIn = e =>{
        e.preventDefault();
        console.log(email,password);
            if(password){
                setError("Password must be at least 6 characters long");
                return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    const {signInUsingGoogle,signInWithEmailAndPassword} = useAuth();
    const element = <FontAwesomeIcon icon={faGoogle} />
    return (
        <div>
            <div className = "login-form">
            <div>
            <h2 className="mt-3">Log In</h2>
             <Form onSubmit={handleLogIn}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
                    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
              </Form.Group>
              <button className="btn btn-primary px-3">Sign In</button>
            </Form> 
            <p className="mt-4">Don't have an account? <Link to = "/registration">Create An Account</Link></p>
            <div className="mb-4">OR</div>
            <button className = "btn btn-warning" onClick={signInUsingGoogle}>{element}  Sign In with Google</button>
            </div>
        </div>
        <div className ="position">
        <Footer></Footer>
        </div>
        </div>
    );
};

export default LogIn;