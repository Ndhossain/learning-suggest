"use client"
import { FormEvent, useState } from 'react';
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
    const [passwordView, setPasswordView] = useState(true);

    async function submitLoginForm(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/auth', {
          method: 'POST',
          body: formData,
          contentType: 'application/json'
        });
     
        // Handle response if necessary
        const data = await response.json();
    }

    function togglePasswordView(event, setStateInputName) {
        if (setStateInputName == "password")
            setPasswordView(!passwordView);
    }

    return (
        <div className="loginForm">
            <h1 className="my-3 h2 fw-bold">Login Here</h1>
            <p>Don't have an account? <a href="/register">Create account</a></p>
            <Form onSubmit={submitLoginForm}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-4 position-relative" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={passwordView ? "password" : "text"} placeholder="Password" name="password" />
                    <div className="eyeIconContainer">
                        <FaRegEye className={!passwordView ? "d-none" : "d-block"} onClick={(e) => togglePasswordView(e, "password")} />
                        <FaRegEyeSlash className={passwordView ? "d-none" : "d-block"} onClick={(e) => togglePasswordView(e, "password")} />
                    </div>
                </Form.Group>
                <Button className="w-100" variant="dark" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
}