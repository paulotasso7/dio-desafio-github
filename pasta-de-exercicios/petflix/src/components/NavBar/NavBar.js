import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="bgc-black dp-flex  jc-sb pad ai-center">
            <div className='dp-flex ai-center jc-center' >
                <img className='al-self' src='https://cdn.icon-icons.com/icons2/2070/PNG/512/parrot_icon_126079.png' alt='logo-bird' height='40px' width='40px'/>                
                <a className='ff-bebas color-red fweigth fsize'>
                PETFLIX
                </a>
            </div>
            <div className='color-grey ff-arial'>
                <Link className='pad-left tx-dec' to="/inicio">
                    Início
                </Link>
                <Link className='pad-left tx-dec' to="/caezinhos">
                    Caezinhos
                </Link>
                <Link className='pad-left tx-dec' to="/gatinhos">
                    Gatinhos
                </Link>
                <Link className='pad-left tx-dec' to="/variados">
                    Variados
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;