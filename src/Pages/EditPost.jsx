import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../Client.jsx'
import '../App.css'

function EditPost() {
    const { id } = useParams()
    const [post, setPost] = useState({ id: null, title: "" })

    useEffect(() => {
        const fetchPost = async() => {
            const { data } = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single()

            setPost(data)
        }

        fetchPost()
    }, [id])

    const editPost = async(event) => {
        event.preventDefault()

        await supabase
            .from('Posts')
            .update({ title: post.title })
            .eq('id', id)

        window.location = "/"
    }

    const deletePost = async(event) => {
        event.preventDefault()

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id)

        window.location = "http://localhost:5173/"
    }

    function handleChange(event) {
        const { name, value } = event.target

        setPost( (prev) => { return {
            ...prev,
            [name]: value,
        }})
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Title:</label>

                <br/>

                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} />

                <button onClick={editPost}>Confirm Changes</button>

                <button onClick={deletePost}>Delete Post</button>
            </form>
        </div>
    )
}

export default EditPost
