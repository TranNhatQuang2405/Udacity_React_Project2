import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import "./QuestionPage.css"
import { Image, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'


const getQuestionInfo = (allQuestion = [], allUser = [], question_id) => {
    let question = allQuestion.find(question => question.id === question_id)
    let author = allUser.find(user => user.id === question?.author)
    if (question && author) {
        question.avatarURL = author.avatarURL
        return question
    } else {
        return null
    }
}

function QuestionPage() {

    const { question_id } = useParams()
    const navigate = useNavigate()
    const users = useSelector(state => state.users)
    const questions = useSelector(state => state.questions)
    const [questionInfo, setQuestionInfo] = useState({})
    const [pending, setPending] = useState(true)

    useEffect(() => {
        if (!users.pending && !questions.pending) {
            let question = getQuestionInfo(questions.allQuestion, users.allUser, question_id)
            console.log(question)
            if (question)
                setQuestionInfo(question)
            else
                navigate("/notFound")
            setPending(false)
        }
        else {
            setPending(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users, questions, question_id])

    if (pending)
        return <div className="text-center mt-3"><Spinner animation='border' /></div>
    else if (questionInfo)
        return (
            <div className="QuestionPage__box">
                <div className="QuestionPage__author">Poll by {questionInfo.author}</div>
                <Image className="QuestionPage__authorAvatar" width={130} height={130} roundedCircle src={questionInfo.avatarURL} />
                <h5 className="mx-auto my-1">Would You Rather</h5>
                <div className="QuestionPage__optionBox">
                    <div className="QuestionPage__option">
                        <div className="Question__optionText">
                            {questionInfo?.optionOne?.text}
                        </div>
                        <div className="QuestionPage__btnClick">
                            Click
                        </div>
                    </div>
                    <div className="QuestionPage__option">
                        <div className="Question__optionText">
                            {questionInfo?.optionTwo?.text}
                        </div>
                        <div className="QuestionPage__btnClick">
                            Click
                        </div>
                    </div>
                </div>
            </div>
        )
    else
        navigate("/")
}

export default QuestionPage