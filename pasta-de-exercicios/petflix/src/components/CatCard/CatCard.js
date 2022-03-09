import { useState, useRef } from 'react';


import 'tachyons';
import React from 'react';
import Content from '../GridSlider/Content';

const CatCard = ({ catImage, breedName, origin}) => {

  const [banner, setBanner] = useState(false);


    const expandBanner = () => {

        setBanner(true);
        console.log('click')
       
    }

        return (
            <article id='article' className="mw5 center bg-black white pa3 pa3-ns mv1 ba b--black-10" onClick={expandBanner}>
                <div >
                    <img alt='bichinhos' src={catImage} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
                    <h1 className="f3 mb2" style={{width:15}}>{breedName}</h1>
                    <h2 className="f5 fw4 gray mt0" style={{width:15}}>{origin}</h2>
                </div>
                
            </article>
        )
}



export default CatCard;   