import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client.jsx'
import '../App.css';

function EditPost() {
    const {id} = useParams();
    const [post, setPost] = useState({ id: null, title: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error("Error fetching post:", error);
            }

            else {
                setPost(data);
            }

            setLoading(false);
        };

        fetchPost();
    }, [id]);

    const editPost = async (event) => {
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

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <form>
                <label htmlFor="name">Title</label>

                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} />

                <input type="submit" value="Submit" onClick={editPost} />

                <button onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost;
