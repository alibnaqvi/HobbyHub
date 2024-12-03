import {useEffect, useState} from 'react'
import {supabase} from '../Client.jsx'
import {Link} from 'react-router-dom'

function FetchPosts(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Posts')
                .select()

            setPosts(data)
        }

        fetchPosts()
    }, [props])

    return (
        <div>
            {posts && posts.length > 0 ? (posts.map((post) => (
                <div key={post.id}>
                    <Link to={`edit/${post.id}`}>
                        <button>Edit Post</button>
                    </Link>

                    <p>{post.title}</p>

                    <Link to={`view/${post.id}`}>
                        <button>More Info</button>
                    </Link>
                </div>
            ))) : (
                <p>{'No Posts Yet'}</p>
            )}
        </div>
    )
}

export default FetchPosts
