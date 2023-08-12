import React, { useState, useEffect } from 'react'
import loginImage from "Assets/LoginImage.png"
import { Alert, Button, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'Redux/action/userAction'
import { _getUsers } from '_DATA'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css"
import { asyncFetchAllUser } from 'Redux/reducer/allUserReducer'
import { asyncfetchAllQuestion } from 'Redux/reducer/questionReducer'

function LoginPage() {

    const isLogin = useSelector(state => state.user.isLogin)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    const handleChangeInput = (event) => {
        setLoginInfo(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }

    useEffect(() => {
        if (isLogin)
            navigate("/")
    }, [isLogin])


    const handleLogin = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        let result = await _getUsers()
        if (result instanceof Object) {
            let user = Object.entries(result).find((tupple) => tupple[0] === loginInfo.username)
            if (user) {
                dispatch(login(user[1]))
                dispatch(asyncFetchAllUser())
                dispatch(asyncfetchAllQuestion())
                navigate("/")
            } else {
                setError("User is not found !!!")
            }
        }
        setLoading(false)
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
                {loading ?
                    <Button
                        className="LoginPage__btnLogin"
                        variant="primary"
                        disabled
                    >
                        <Spinner animation='border' size='sm' />
                    </Button>
                    :
                    <Button
                        className="LoginPage__btnLogin"
                        type='submit'
                        variant="primary"
                    >
                        Login
                    </Button>
                }
            </Form>
            {error && <Alert className='mt-3' variant='danger'>{error}</Alert>}
        </div>
    )
}

export default LoginPage