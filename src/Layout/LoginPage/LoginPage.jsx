import React, { useState } from 'react'
import loginImage from "Assets/LoginImage.png"
import { Button, Form } from 'react-bootstrap'
import "./LoginPage.css"

function LoginPage() {

    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })

    const handleChangeInput = (event) => {
        setLoginInfo(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }

    const handleLogin = (event) => {
        event.preventDefault()

    }

    return (
        <div className="LoginPage__box">
            <div className="LoginPage__title">Employee Polls</div>
            <div className="LoginPage__imageBox">
                <img className="LoginPage__image" src={loginImage} alt="loginImage" />
            </div>
            <Form className="LoginPage__formBox" onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label className="LoginPage__label" htmlFor="username">Username:</Form.Label>
                    <Form.Control
                        value={loginInfo.username}
                        onChange={handleChangeInput}
                        required
                        id="username"
                        type="text"
                        placeholder="fill username..."
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="LoginPage__label" htmlFor="password">Password:</Form.Label>
                    <Form.Control
                        value={loginInfo.password}
                        onChange={handleChangeInput}
                        required
                        id="password"
                        type="password"
                        placeholder="fill password..."
                    />
                </Form.Group>
                <Button
                    className="LoginPage__btnLogin"
                    type='submit'
                    variant="primary"
                >
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage