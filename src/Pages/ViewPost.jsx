import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client.jsx';

function ViewPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data, error } = await supabase
                    .from('Posts')
                    .select()
                    .eq('id', id)
                    .single();

                if (error) {
                    throw error;
                }

                setPost(data);
            }

            catch (err) {
                setError(err.message);
            }

            finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error}</p>;

    if (!post) return <p>No post found.</p>;

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
}

export default ViewPost;
