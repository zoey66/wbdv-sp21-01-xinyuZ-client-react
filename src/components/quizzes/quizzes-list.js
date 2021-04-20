import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizzesService from '../../services/quizzes-service'

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [quizzes])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                                <button className='float-right btn btn-primary'>start</button>
                            </Link>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default QuizzesList;