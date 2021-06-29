import axios from 'axios';

const KEY = 'AIzaSyCo9njzJSAtNId9RRZmtCHCv3AVJ8x1SFs';


export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});