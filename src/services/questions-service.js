
const quizzes_url='http://localhost:3000/api/quizzes'
const questions_url='http://localhost:3000/api/questions'

const findQuestionsByquiz=(quizId)=>{
    return fetch(`${quizzes_url}/${quizId}/questions`)
        .then(response =>response.json())
}

const updateAnswer=(qid,answer)=>{
    fetch(`${questions_url}/${qid}`, {
        method:'PUT', body:JSON.stringify(answer),
        headers:{
            'content-type': 'application/json'
        }})
        .then(response => response.json())
}

export default {
    findQuestionsByquiz,updateAnswer
}