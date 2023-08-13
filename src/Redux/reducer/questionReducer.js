import { fetchAllQuestion, preFetchAllQuestion } from "Redux/action/questionAction"
import { _getQuestions } from "_DATA"

let questionState = {
    allQuestion: [],
    newQuestions: [],
    doneQuestions: [],
    pending: false
}

const isAnsweredQuestion = (answeredQuestionIdsArray, questionId) => {
    let check = answeredQuestionIdsArray.find(ansQuestionId => ansQuestionId === questionId)
    if (check)
        return true
    else
        return false
}

export const asyncfetchAllQuestion = (answeredQuestions = {}) => {
    let answeredQuestionIdsArray = Object.entries(answeredQuestions).map((tupple) => tupple[0]) || []
    return async (dispatch) => {
        dispatch(preFetchAllQuestion())
        let rawResult = await _getQuestions()
        let result = Object.entries(rawResult).map((tupple) => tupple[1])
        let newQuestions = result.filter(question => !isAnsweredQuestion(answeredQuestionIdsArray, question.id))
        let doneQuestions = result.filter(question => isAnsweredQuestion(answeredQuestionIdsArray, question.id))
        dispatch(fetchAllQuestion({
            allQuestion: result,
            newQuestions: newQuestions,
            doneQuestions: doneQuestions
        }))
    }
}

export const questionReducer = (state = questionState, action) => {
    switch (action.type) {
        case "FETCH_ALL_QUESTION":
            return {
                ...action.data,
                pending: false
            }
        case "PRE_FETCH_ALL_QUESTION":
            return {
                allQuestion: [],
                newQuestions: [],
                doneQuestions: [],
                pending: true
            }
        default:
            return state
    }
}