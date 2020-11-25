import axios from 'axios'

export default axios.create({
    baseURL: 'https://content-youtube.googleapis.com/youtube/v3/search'
})
