import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { FormProvider, usePostForm } from './contexts/PostFormContext';

function App() {
  const {
    searchKeyword,
    setSearchKeyword,
    page,
    setPage,
    row,
    setRow,
    title, setTitle,
    body, setBody,
    showForm, toggleForm } = usePostForm();
  return (
    <div className='post-container'>
      <PostForm />
      <div className='header'>
        Post Manager
      </div>
      <div className='main-content'>
        <div className='leftside'>
          <button className='new-btn' onClick={() => { toggleForm(true) }}>+ New post</button>
        </div>
        <PostList />
      </div>
    </div>
  );
}

export default App;
