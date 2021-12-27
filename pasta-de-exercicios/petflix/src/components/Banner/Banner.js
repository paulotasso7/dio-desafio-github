import './Banner.css'
const Banner = ( ) => {
    return (
        <div id='banner'>
           <div id='conteudo-banner'>
                <h1>AQUI GOSTAMOS MUITO DE BICHINHOS</h1>
                <div>
                    <p>Cuidar, gostar, amar, pensar e viver bichinhos é muito importante pra nós.
                        <br/>Pra você também é?! Então confira nosso conteúdo mágico
                    </p>
                    <div >
                        <button className='buton-banner'>LEIA MAIS</button>
                        <button className='buton-banner'>PETS</button>
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default Banner;