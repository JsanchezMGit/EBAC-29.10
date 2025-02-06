import Card from '../Card';
import { formatSummary } from '../../functions/commun';
import { UserMessage } from '../UserMessage';
import { IItemsProps } from '../../interfaces/ItemsProps';

const Items = ({movieList}:IItemsProps) => {
  const itemsContent = 
    <section className='tv-items'>
      {movieList.map((movie) => {
        const {show, score} = movie;
        const {id, name, summary, genres, image} = show;
        const {medium} = image ?? {};
        return <Card id={id} name={name} summaryText={formatSummary(summary)} genres={genres} imageUrl={medium} score={score} key={id} />
      })}
    </section>

    return(movieList?.length > 0 ? itemsContent : <UserMessage text='No se encontraron coincidencias'/> );
}

export default Items;