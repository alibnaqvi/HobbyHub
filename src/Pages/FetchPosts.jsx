import {useEffect, useState} from 'react'
import {supabase} from '../Client.jsx'
import {Link} from 'react-router-dom'

function FetchPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Posts')
                .select()

            setPosts(data)
        }

        (async () => {
            await fetchPosts()
        })()
    }, [])

    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>

                        <Link to={`edit/${post.id}`}>
                            <button>Edit Post</button>
                        </Link>

                        <br/>

                        <Link to={`view/${post.id}`}>
                            <button>More Info</button>
                        </Link>
                    </div>
                ))) : (
                <p>No Posts Yet</p>
            )}
        </div>
    )
}

export default FetchPosts
