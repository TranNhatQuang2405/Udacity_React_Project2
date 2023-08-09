
let userState = {
    isLogin: false,
    info: {}
}
export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLogin: true,
                info: {
                    ...action.payload
                }
            }
        case "LOGOUT":
            return {
                isLogin: false,
                info: null
            }
        default:
            return state
    }
}