import { useState, useEffect } from 'react';
import { supabase } from '../Client.jsx'
import Card from '../Components/Card.jsx';

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
                        <Card
                            key={post.id}
                            id={post.id}
                            title={post.title}
                        />
                    ))
                ) : (
                    <p className="no-crewmates-message">{'No Posts Yet'}</p>
                )
            }
        </div>

    )
}

export default ReadPosts;
