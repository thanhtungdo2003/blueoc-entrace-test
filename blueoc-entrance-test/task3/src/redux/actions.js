import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const ADD_POST = 'ADD_POST';

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
};

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
});
