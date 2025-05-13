import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import { usePostForm } from '../contexts/PostFormContext';

export default function PostForm() {
    const dispatch = useDispatch();
    const {
            searchKeyword,
            setSearchKeyword,
            page,
            setPage,
            row,
            setRow,
            title, setTitle,
            body, setBody,
            showForm, toggleForm} = usePostForm();

    const handleSubmit = e => {
        e.preventDefault();
        const newPost = { id: Date.now(), title, body };
        dispatch(addPost(newPost));
        setTitle('');
        setBody('');
    };

    return (
        <form className={`post-form ${showForm?"show":"hide"}`} onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='control-btn' onClick={()=>{
                    toggleForm(false);
                }}>X</div>
            </div>
            <div className='form-content'>
                <input
                    className='title-input'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title..."
                /><br />
                <textarea
                    className='body-input'
                    rows={4}
                    placeholder='Enter body...'
                    onChange={(e) => setBody(e.target.value)}

                />
            </div>
            <div className='post-btns'>
                <button className='submit-btn' type="submit">Add Post</button>

            </div>
        </form>
    );
}
