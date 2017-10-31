import axios from 'axios';

export const FETCH_BLOGS = 'fetch_blogs';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MATTHEWBKEY'


export function fetchBlogs() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_BLOGS,
        payload: request
    };
}