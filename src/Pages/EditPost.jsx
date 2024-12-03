import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {supabase} from '../Client.jsx'
import '../App.css'

function EditPost() {
    const {id} = useParams()
    const [post, setPost] = useState({title: ""})

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single()

            setPost(data)
        }

        (async () => {
            await fetchPost()
        })()
    }, [id])

    const editPost = async (event) => {
        event.preventDefault()

        await supabase
            .from('Posts')
            .update({title: post.title})
            .eq('id', id)

        window.location = "/"
    }

    const deletePost = async () => {
        await supabase
            .from('Posts')
            .delete()
            .eq('id', id)

        window.location = "/"
    }

    function handleChange(event) {
        const {name, value} = event.target

        setPost((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div>
            <form onSubmit={editPost}>
                <label htmlFor="title">Title:</label>

                <br/>

                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/>

                <br/>

                <button type="submit">Confirm Changes</button>
                <button type="button" onClick={deletePost}>Delete Post</button>
            </form>
        </div>
    )
}

export default EditPost
