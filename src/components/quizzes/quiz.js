import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionsService from '../../services/questions-service'
import quizzesService from '../../services/quizzes-service'

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    const answer=[];
    useEffect(() => {
       questionsService.findQuestionsByquiz(quizId)
            .then(questions => setQuestions(questions))
    },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                        <li>
                            <Question question={question}
                            answer={answer}/>
                        </li>
                    )
                }
            </ul>

            <button className='float-right btn btn-primary'
                    onClick={()=>{quizzesService.submitQuiz(quizId,questions) ;console.log(answer)} }>submit</button>
        </div>
    );
}

export default Quiz;