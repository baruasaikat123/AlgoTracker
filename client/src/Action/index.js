import { SET_QUESTIONS } from './actionTypes'
const axios = require('axios')

export const postQuestions = (data) => {
    return async (dispatch) => {
        data.map(async (x, key) => (
            await axios({
                method: 'post',
                url: '/addquestions',
                data: {
                    title:  x.title , 
                    link: x.link,
                    details: x.details,
                    topic: x.topic
                }
            })
        ))
        // let questions = []
        
        // data.map((x, key) => (
        //     questions.push({ title: x.title, link: x.link, details: x.details, topic: x.topic })
        // ))
        // console.log(questions);
        // await axios.post('/addquestions',data)

        dispatch(getQuestions())
    }
}
export const setQuestions = (data) => {
    return {
        type: SET_QUESTIONS,
        data
    }
}
export const getQuestions = () => {
    return async (dispatch) => {
        const data = await axios.get('/getquestions')
        dispatch (setQuestions(data))
    }
}