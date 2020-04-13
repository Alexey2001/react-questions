import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-dfe1b.firebaseio.com/'
})