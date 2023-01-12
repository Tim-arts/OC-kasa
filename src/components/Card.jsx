import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <Link to={'housings/' + props.housing.id} className="card__link">
        <div className="card__image">
          <img src={props.housing.cover} alt="Logement"></img>
          <span></span>
        </div>
        <p className="card__title">{props.housing.title}</p>
      </Link>
    </div>
  );
}

export default Card;
