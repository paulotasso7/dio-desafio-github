import './Banner.css';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';  
import 'pure-react-carousel/dist/react-carousel.es.css';

const Banner = () => {
    
    const Painel =()=> {
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
    };

    return (
        <CarouselProvider  naturalSlideWidth={100} naturalSlideHeight={35} totalSlides={4}  interval={4000} isPlaying={true} dragEnabled={true} touchEnabled={true} >
            
            <Painel/>
            <Slider >
                <Slide index={0} >
                    <Image src='https://image.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg'  />
                </Slide>
                <Slide index={1}>
                    <Image src='https://image.freepik.com/free-photo/group-cats-dogs_191971-15880.jpg'  />
                </Slide>
                <Slide index={2}>
                   <Image src='https://image.freepik.com/free-photo/portrait-collection-adorable-puppies_53876-145628.jpg' />
                </Slide>
                <Slide index={3}>
                   <Image src='https://as2.ftcdn.net/v2/jpg/04/77/27/33/1000_F_477273347_Moc7jIWgfHbMDWnKkfC5w7KeyDJ6S89G.jpg'  />
                </Slide>
            </Slider>

            
        </CarouselProvider>
    )
}

export default Banner;