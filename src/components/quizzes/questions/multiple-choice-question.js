import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [grade,setGrade]=useState(false)
    return(
        <div>
            <h4>
                {question.question}
                {
                    grade && yourAnswer == question.correct &&
                    <i className="fas fa-check float-right" style={{color: 'green'}}></i>
                }
                {
                   grade && yourAnswer != question.correct &&
                    <i className="fas fa-times float-right" style={{color: 'red'}}></i>
                }

            </h4>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item
                            ${grade && choice === question.correct ? 'list-group-item-success' : 
                                grade && choice===yourAnswer && choice !==question.correct ? 'list-group-item-danger':
                            'Neither'}`}
                            >
                                <label><input
                                    onClick={() => {
                                        setYourAnswer(choice)
                                        setGrade(false)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>


                                {
                                    question.correct === choice && grade &&
                                    <i className="fas fa-check float-right"></i>
                                }
                                {
                                    grade && choice===yourAnswer && choice !==question.correct &&
                                    <i className="fas fa-times float-right"></i>
                                }
                            </li>

                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button type="button" className="btn btn-success"
                    onClick={()=>{setGrade(true)}}> Grade</button>
        </div>
    )
}

export default MultipleChoiceQuestion