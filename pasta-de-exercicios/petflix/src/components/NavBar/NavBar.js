import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="bgc-black dp-flex  jc-sb pad ai-center">
            <div className='dp-flex ai-center jc-center' >
                <img className='al-self' src='https://cdn.icon-icons.com/icons2/2070/PNG/512/parrot_icon_126079.png' alt='logo-bird' height='40px' width='40px'/>                
                <Link className='ff-bebas color-red fweigth fsize tx-dec' to='/'>
                PETFLIX
                </Link>
            </div>
            <div className='color-grey ff-arial'>
                <Link className='pad-left tx-dec color-grey' to="/inicio">
                    Início
                </Link>
                <Link className='pad-left tx-dec color-grey' to="/caezinhos">
                    Caezinhos
                </Link>
                <Link className='pad-left tx-dec color-grey' to="/gatinhos">
                    Gatinhos
                </Link>
                <Link className='pad-left tx-dec color-grey' to="/passarinhos">
                    Passarinhos
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;