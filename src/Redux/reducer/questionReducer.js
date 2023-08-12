import { fetchAllQuestion } from "Redux/action/questionAction"
import { _getQuestions } from "_DATA"

let questionState = []

export const asyncfetchAllQuestion = () => {
    return async (dispatch) => {
        let rawResult = await _getQuestions()
        let result = Object.entries(rawResult).map((tupple) => tupple[1])
        dispatch(fetchAllQuestion(result))
    }
}

export const questionReducer = (state = questionState, action) => {
    switch (action.type) {
        case "FETCH_ALL_QUESTION":
            return [...action.data]
        default:
            return state
    }
}