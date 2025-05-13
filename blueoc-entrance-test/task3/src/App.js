import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { usePostForm } from './contexts/PostFormContext';

function App() {
  const {toggleForm } = usePostForm();
  return (
    <div className='post-container'>
      <PostForm />
      <div className='header'>
        Test Forum
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
