import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {supabase} from '../Client.jsx'

function ViewPost() {
    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
                .from('Posts')
                .select()
                .eq('id', id)
                .single()

            setPost(data)
        }

        (async () => {
            await fetchPost()
        })()
    }, [id])

    return (
        <div>
            {post ? (
                <h1>{post.title}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ViewPost
