// src/components/PostList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className='posts'>
            {posts.map(post => (
                <div className='post-item' key={post.id}>
                    <div>
                        <div className='user-header'></div>
                    </div>
                    <div>
                        <div className='post-title'>{post.title}</div>
                        <div className='post-body'>{post.body}</div>
                    </div>

                </div>
            ))}
        </div>
    );
}
