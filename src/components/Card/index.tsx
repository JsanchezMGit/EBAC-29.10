import rateIco from './img/start.svg';
import './index.css';
import tvstatic from '../Header/img/tvstatic.jpeg'
import { useNavigate } from 'react-router-dom';

interface CardProps {
    id: number,
    name: string,
    summaryText: string,
    genres: string[],
    imageUrl: string,
    score: number
}

const Card = ({id, name, summaryText, genres, imageUrl, score}:CardProps) => {

    const navigate = useNavigate();

    const handleCardClick = async (e: React.MouseEvent<HTMLElement>) => {
        const selectedMovieId = e.currentTarget.getAttribute('data-id');
        navigate(`movie/${selectedMovieId}/details`);
    }

    const handleCardMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        e.currentTarget.querySelector('.tv-item-summary')?.classList.add('tv-item-summary--shown');
    }

    const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        e.currentTarget.querySelector('.tv-item-summary')?.classList.remove('tv-item-summary--shown');
    }    

    return (
        <article className='tv-item' onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
            <div className='tv-item-summary'>
                <p>{summaryText}</p>
                <ul>{genres.map(c => <li>{c}</li>)}</ul>
                <button className='tv-item-link' data-id={id} onClick={handleCardClick}>Ver mas detalles</button>
            </div>
            <img className='tv-item-image' src={imageUrl ?? tvstatic} alt={`Portada de ${name}`} />
                <h2 className='tv-item-title'>{name}</h2>
                <p className='tv-item-data'>
                    <i><img src={rateIco} alt='Puntuaje' /></i>
                    <span>{Number((score * 100).toFixed(2)) < 100 ? (score * 100).toFixed(2) : 100}</span>
                </p>
        </article>        
    );
}

export default Card;