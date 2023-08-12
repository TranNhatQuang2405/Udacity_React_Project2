import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from 'Utils/routeUtil'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'Redux/action/userAction'

function Header() {

    const userState = useSelector(state => state.user)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const title = routes.find(route => route.path === location.pathname)?.title
    const userInfo = userState?.info

    const navClassName = (navPath) => {
        if (navPath === location.pathname)
            return "Header__navItem active"
        else
            return "Header__navItem"
    }

    if (!userState?.isLogin)
        return (
            <></>
        )
    return (
        <Row className='m-0'>
            <Col xs={12} className='p-0 my-3'>
                <div className="Header__title">{title}</div>
            </Col>
            <Col xs={12} className="px-0">
                <div className="Header__navBox">
                    {
                        routes?.filter(route => route.isShow)
                            ?.map(route => (
                                <div onClick={() => navigate(route.path)}
                                    key={route.id}
                                    className={navClassName(route.path)}
                                >
                                    {route.nav}
                                </div>
                            ))
                    }
                    <div className="Header__userInfo">
                        <Image className="Header__userAvatar" width={40} height={40} roundedCircle src={userInfo.avatarURL} />
                        <div className="Header__userName">
                            {userInfo.id}
                        </div>
                        <div className="Header__logoutBtn" onClick={() => dispatch(logout())}>
                            Logout
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Header