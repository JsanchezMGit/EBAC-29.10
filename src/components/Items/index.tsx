import Card from '../Card';
import { formatSummary } from '../../functions/commun'

interface ItemsProps {
    movieList: any[]
}

const Items = ({movieList}:ItemsProps) => {
    return(
        <section className='tv-items'>
          {movieList.map((movie) => {
            const {show, score} = movie;
            const {id, name, summary, genres, image} = show;
            const {medium} = image ?? {};
            return <Card id={id} name={name} summaryText={formatSummary(summary)} genres={genres} imageUrl={medium} score={score} key={id} />
          })}
        </section>        
    );
}

export default Items;