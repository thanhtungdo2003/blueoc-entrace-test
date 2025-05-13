import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import { usePostForm } from '../contexts/PostFormContext';

export default function PostForm() {
    const dispatch = useDispatch();
    const {
        title, setTitle,
        body, setBody,
        showForm, toggleForm } = usePostForm();

    const handleSubmit = e => {
        e.preventDefault();
        if (!body || !title) {
            return alert("Mission require field!");
        }
        const newPost = { id: Date.now(), title: title, body: body };
        dispatch(addPost(newPost));
        setTitle('');
        setBody('');
        toggleForm(false);
    };

    return (
        <form className={`post-form ${showForm ? "show" : "hide"}`} onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='control-btn' onClick={() => {
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
                    value={body}
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
