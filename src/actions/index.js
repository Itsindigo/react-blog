import axios from 'axios';

export const FETCH_BLOGS = 'fetch_blogs';
export const CREATE_BLOG = 'create_blog';
export const FETCH_BLOG = 'get_blog';
export const DELETE_BLOG = 'delete_blog';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=MATTHEWBKEY'


export function fetchBlogs() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_BLOGS,
        payload: request
    };
}

export function createBlog(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback()
    );

    return {
        type: CREATE_BLOG,
        payload: request
    };
}

export function fetchBlog(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_BLOG,
        payload: request
    }
}

export function deleteBlog(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback())
    return {
        type: DELETE_BLOG,
        payload: id
    }
}