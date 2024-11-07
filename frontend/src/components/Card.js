import { useNavigate } from 'react-router-dom';

function Card({ title, image, route }) {
    const navigate = useNavigate();

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h3 className="card-title">{title}</h3>
            <button className="explore-button" onClick={() => navigate(route)}>
                Explorar
            </button>
        </div>
    );
}

export default Card;
