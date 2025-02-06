
import tvLogo from './img/tv.svg';
import './index.css';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    searchRequest:Function
}

const Header = ({searchRequest}:HeaderProps) => {

    const navigate = useNavigate();

    return(
        <header>
            <section className='menu-container'>
                <div className='logo'>
                    <span>¿Que ver en TV?</span>
                    <img src={tvLogo} alt='Icono de ¿Que ver en TV?' />
                </div>
            </section>
            <section className='search-container'>
                <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => { searchRequest(e.target.value); navigate('/');}} className='mainsearch' type='search' name='mainsearch' id='mainsearch' autoComplete='off' placeholder='Buscar ¿Que ver en TV?' />
            </section>
        </header>        
    );
}

export default Header;