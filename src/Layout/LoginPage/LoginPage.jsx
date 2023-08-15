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

    const isLogin = useSelector(state => state.user?.isLogin)
    const allUser = useSelector(state => state.users?.allUser)
    const pendingLoadData = useSelector(state => state.users?.pending)
    const currentLocation = useSelector(state => state.currentLocation)
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
            navigate(currentLocation || "/")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin])


    const handleLogin = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        let users = allUser || []
        let user = users.find((user) => user.id === loginInfo.username)
        if (user) {
            dispatch(login(user))
            dispatch(asyncFetchAllUser())
            dispatch(asyncfetchAllQuestion(user?.answers))
            navigate(currentLocation || "/")
        } else {
            setError("User is not found !!!")
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
                    {
                        pendingLoadData ?
                            <Form.Control
                                value={loginInfo.username}
                                onChange={handleChangeInput}
                                required
                                id="username"
                                placeholder="fill username..."
                            />
                            :
                            <Form.Select
                                value={loginInfo.username}
                                onChange={handleChangeInput}
                                required
                                id="username"
                                placeholder="fill username..."
                            >
                                {
                                    allUser && allUser?.map(user => (
                                        <option key={user.id} value={user.id}>{user.id}</option>
                                    ))
                                }
                            </Form.Select>
                    }
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