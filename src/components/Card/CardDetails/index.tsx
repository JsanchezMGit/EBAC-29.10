import './index.css'
import tvstatic from '../../Header/img/tvstatic.jpeg'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { formatSummary } from '../../../functions/commun'

const CardDetails = () => {
    const [selectedMovie, setselectedMovie] = useState<any>({});
    const navigate = useNavigate();

    const handleCloseClick = () => {
        navigate('/');
    }

    const baseApiURL = 'https://api.tvmaze.com/';

    const getMovie = async (movieId:number) => {
      try {
        const response = await axios.get(`${baseApiURL}shows/${movieId}`);
        setselectedMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const params = useParams();
      
    useEffect(() => {
        const movieId = Number(params.id);
        getMovie(movieId);
    }, []);

    const buildSumaryDetailsObject = () => {
        let sumaryDetailsObject = [];

        const keysToPrint = {
            type: 'Tipo',
            language: 'Idioma original',
            genres: 'Genero(s)',
            status: 'Estatus',
            premiered: 'Estrenado',
            ended: {
                label: 'Terminado',
                defaultValue: 'Aun no termina'
            },
            runtime: {
                label: 'Episodios',
                defaultValue: '0'
            },
            rating: {
                label: 'Calificacion',
                valueFrom: 'average'
            },        
        };
        for(let key in selectedMovie) {
            const keyToPrint = (keysToPrint as any)[key];
            if (keyToPrint) {
                if (typeof keyToPrint === 'string') {
                    sumaryDetailsObject.push({key:keyToPrint, value: selectedMovie[key]});
                } else if (typeof keyToPrint === 'object') {
                    const value = `${selectedMovie[key] && typeof selectedMovie[key] === 'object' ? selectedMovie[key][keyToPrint.valueFrom] : selectedMovie[key] ?? keyToPrint.defaultValue}`;
                    sumaryDetailsObject.push({key:keyToPrint.label, value: value});
                }
            }
        }
        return sumaryDetailsObject;
    }

    return(
        <div className='item-details'>
            <section className='item-details-header'>
                <span className='close-details' onClick={(handleCloseClick)}>&larr;</span>
                <h2 className='item-details-title'>{selectedMovie.name}</h2>
            </section>
            <section className='item-details-body'>
                <img className='item-details-image' src={selectedMovie?.image?.original ?? tvstatic} alt={`Portada de ${selectedMovie.name}`} />
                <article>
                    <p className='item-details-summary'>{formatSummary(selectedMovie.summary)}</p>
                    <p className='item-details-data'>
                        {buildSumaryDetailsObject().map((detail) => {
                            const {key, value} = detail;
                            return (
                                <span className='item-details-text'>{key} : {value}</span>        
                            )
                        })}
                    </p>
                </article>
            </section>
        </div>
    );
}

export default CardDetails;