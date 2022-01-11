import './Banner.css';
import { Link } from 'react-router-dom';


const Banner = () => {


    return (
        <div id='banner'>
           <div id='conteudo-banner'>
                <h1 id='h-banner'>PORQUE PET É ASSUNTO SÉRIO DIVERTIDO</h1>
                <div>
                    <p>Amar bichinhos é muito importante pra nós.
                        <br/>Confira nosso conteúdo mágico
                    </p>
                    <div >
                        <Link to='/gatinhos'>
                        <button className='buton-banner' >LEIA MAIS</button>
                        </Link>
                        
                        <button className='buton-banner'>PETS</button>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Banner;