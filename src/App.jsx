import { Link, useRoutes } from 'react-router-dom'
import ReadPosts from "./Pages/ReadPosts.jsx";
import AddPost from "./Pages/AddPost.jsx";
import ViewPost from "./Pages/ViewPost.jsx";
import EditPost from "./Pages/EditPost.jsx";
import './App.css'

function App() {
    const posts = []

    let element = useRoutes([
        {
            path: "/",
            element:<ReadPosts data={posts}/>
        },
        {
            path:"/edit/:id",
            element: <EditPost data={posts} />
        },
        {
            path:"/new",
            element: <AddPost />
        },
        {
            path: "/view/:id",
            element: <ViewPost data={posts} />
        }
    ]);

    return (
        <div className="header-container">
            <div className="header-content">
                <h1 className="header-title">HobbyHub</h1>
                <Link to="/"><button className="header-button">List Posts</button></Link>
                <Link to="/new"><button className="header-button">Submit Post</button></Link>
            </div>
            <div className="main-content">{element}</div>
        </div>
    );
}

export default App;
