import { useState, useEffect } from 'react';
import { supabase } from '../Client.jsx'
import { Link } from "react-router-dom";

function ReadPosts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Posts')
                .select();

            setPosts(data)
        }

        fetchPosts();
    }, [props]);

    return (
        <div>
            {
                posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id}>
                            <Link to={`edit/${post.id}`}>
                                <button>Edit</button>
                            </Link>

                            <p>{post.title}</p>

                            <Link to={`view/${post.id}`}>
                                <button>View</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>{'No Posts Yet'}</p>
                )
            }
        </div>
    )
}

export default ReadPosts;
