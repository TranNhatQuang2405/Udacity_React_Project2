import { _getUsers } from "_DATA"
import { fetchAllUser } from "Redux/action/allUserAction"

let allUserState = []

export const asyncFetchAllUser = () => {
    return async (dispatch) => {
        let rawResult = await _getUsers()
        let result = Object.entries(rawResult).map((tupple) => tupple[1])
        dispatch(fetchAllUser(result))
    }
}

export const allUserReducer = (state = allUserState, action) => {
    switch (action.type) {
        case "FETCH_ALL_USER":
            return [...action.data]
        default:
            return state
    }
}