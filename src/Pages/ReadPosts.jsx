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
                        <div key={post.id} className="crewmate-card-container">
                            <Link to={`edit/${post.id}`}>
                                <button className="header-button">Edit</button>
                            </Link>

                            <p className="crewmate-name">{post.title}</p>

                            <Link to={`view/${post.id}`}>
                                <button className="header-button">View</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-crewmates-message">{'No Posts Yet'}</p>
                )
            }
        </div>
    )
}

export default ReadPosts;
