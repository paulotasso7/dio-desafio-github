import './Cards.css'
import {useState, useEffect} from 'react';





const Cards = ( ) => {

const [petImg, setPetImg] = useState()


useEffect(() => {
fetch('https://api.thecatapi.com/v1/images/search')
.then(res => res.json())
.then(res => setPetImg(res[0].url) );
})
    
    return (
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img alt='bichinhos' src={petImg} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                <h1 className="f3 mb2">Mimi W.</h1>
                <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
            </div>
        </article>
    )
}

export default Cards;