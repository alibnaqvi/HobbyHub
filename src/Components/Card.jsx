import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className="crewmate-card-container">
            <Link to={`edit/${props.id}`} className="edit-link">Edit</Link>

            <p className="crewmate-name">{props.title}</p>

            <Link to={`view/${props.id}`} className="info-link">View</Link>
        </div>
    );
}

export default Card;
