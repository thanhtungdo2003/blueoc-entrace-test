import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const ADD_POST = 'ADD_POST';

export const fetchPosts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data });
};

export const addPost = (post) => async (dispatch) => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
        dispatch({
            type: ADD_POST,
            payload: res.data,
        });
    } catch (err) {
        console.error('Failed to add post:', err);
    }
};
