const quizzes_url='http://localhost:3000/api/quizzes'

const findAllQuizzes=()=>{
    return fetch(quizzes_url)
        .then(response => response.json())
}


const submitQuiz = (quizId, questions) => {
        fetch(`${quizzes_url}/${quizId}/attempts`, {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(result => console.log(result))
    }



export default {
    findAllQuizzes,submitQuiz

}