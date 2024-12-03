import {Link, useRoutes} from 'react-router-dom'
import FetchPosts from './Pages/FetchPosts.jsx'
import AddPost from './Pages/AddPost.jsx'
import ViewPost from './Pages/ViewPost.jsx'
import EditPost from './Pages/EditPost.jsx'
import './App.css'

function App() {
    const posts = []

    let element = useRoutes([
        {
            path: "/",
            element: <FetchPosts data={posts}/>
        },
        {
            path: "/edit/:id",
            element: <EditPost data={posts}/>
        },
        {
            path: "/new",
            element: <AddPost/>
        },
        {
            path: "/view/:id",
            element: <ViewPost data={posts}/>
        }
    ])

    return (
        <div>
            <h1>HobbyHub</h1>

            <Link to="/">
                <button>All Posts</button>
            </Link>

            <br/>

            <Link to="/new">
                <button>Add a Post</button>
            </Link>

            <br/>
            <br/>

            {element}
        </div>
    )
}

export default App
