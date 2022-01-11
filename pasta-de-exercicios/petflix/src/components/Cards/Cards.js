// import './Cards.css'
import 'tachyons';

const Cards = ({ id, petImage, breedName, origin}) => {

        return (
            <article className="mw5 center bg-white pa3 pa3-ns mv1 ba b--black-10">
                <div className="tc" >
                    <img alt='bichinhos' src={petImage} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                    <h1 className="f3 mb2" style={{width:15}}>{breedName}</h1>
                    <h2 className="f5 fw4 gray mt0" style={{width:15}}>{origin}</h2>
                    <h6>{id}</h6>
                </div>
            </article>
        )
}



export default Cards;   