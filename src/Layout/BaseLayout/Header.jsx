import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

    const userState = useSelector(state => state.user)

    if (userState?.isLogin)
        return (
            <div>Header </div>
        )
    return <></>
}

export default Header