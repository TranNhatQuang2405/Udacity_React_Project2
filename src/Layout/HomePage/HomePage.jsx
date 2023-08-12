import React from 'react'
import { useSelector } from 'react-redux'
import "./HomePage.css"

function HomePage() {
    const questions = useSelector(state => state.questions)
    const answeredQuestion = useSelector(state => state.user?.info?.answers)
    console.log(questions, answeredQuestion)
    return (
        <div className="HomePage__box">
            <div>Ha</div>
            <div>B</div>
        </div>
    )
}

export default HomePage