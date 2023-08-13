import React from 'react'
import { useSelector } from 'react-redux'
import "./HomePage.css"
import { QuestionItem } from 'Component'
import { Row } from 'react-bootstrap'

function HomePage() {
    const doneQuestions = useSelector(state => state.questions?.doneQuestions)
    const newQuestions = useSelector(state => state.questions?.newQuestions)

    return (
        <div className="HomePage__box">
            <div className="HomePage__childBox">
                <div className="HomePage__childTitle">New Question</div>
                <Row className="mx-0 mt-3">
                    {
                        newQuestions.map(question => (
                            <QuestionItem key={question.id} questionInfo={question} />
                        ))
                    }
                </Row>
            </div>
            <div className="HomePage__childBox">
                <div className="HomePage__childTitle">Done</div>
                <Row className="mx-0 mt-3">
                    {
                        doneQuestions.map(question => (
                            <QuestionItem key={question.id} questionInfo={question} />
                        ))
                    }
                </Row>
            </div>
        </div>
    )
}

export default HomePage