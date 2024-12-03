import { useState } from 'react';
import { supabase } from '../Client.jsx';
import '../App.css';

function AddPost() {
    const [post, setPost] = useState({ title: "" });

    const addPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({ title: post.title })
            .select();

        window.location = "/";
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Title</label>

                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} />

                <input type="submit" value="Submit" onClick={addPost} />
            </form>
        </div>
    );
}

export default AddPost;
