import {useState} from 'react'
import {supabase} from '../Client.jsx'
import '../App.css'

function AddPost() {
    const [post, setPost] = useState({title: ""})

    const addPost = async (event) => {
        event.preventDefault()

        await supabase
            .from('Posts')
            .insert({title: post.title})
            .select()

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
            <form onSubmit={addPost}>
                <label htmlFor="title">Title:</label>

                <br/>

                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/>

                <button type="submit">Submit Post</button>
            </form>
        </div>
    )
}

export default AddPost
