import React from 'react'
import "./QuestionItem.css"
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

function QuestionItem({ questionInfo }) {

    const navigate = useNavigate()

    const timeCreated = (timestamp) => {
        return moment(timestamp).format("hh:mm A | DD/MM/yyyy")
    }

    return (
        <Col xs={6} md={3} className="mb-3">
            <div className="QuestionItem__box">
                <div className="QuestionItem__author">{questionInfo.author}</div>
                <div className="QuestionItem__time">{timeCreated(questionInfo.timestamp)}</div>
                <div className="QuestionItem__btnBox">
                    <div className="QuestionItem__btnShow" onClick={() => navigate(`/question/${questionInfo.id}`)}>
                        Show
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default QuestionItem