import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client.jsx'
import '../App.css';

function EditPost() {
    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: ""});

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({ title: post.title })
            .eq('id', id);

        window.location = "/";
    };

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:5173/";
    };

    function handleChange(event) {
        const {name, value} = event.target;

        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div className="form-container">
            <form className="crewmate-form">
                <label className="form-label" htmlFor="name">Title</label>

                <br/>

                <input className="form-input" type="text" id="title" name="title" value={post.title} onChange={handleChange} />

                <br/>
                <br/>

                <input className="form-submit" type="submit" value="Submit" onClick={updatePost} />

                <button className="form-delete" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;
