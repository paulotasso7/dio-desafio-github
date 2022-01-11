import { useEffect, useState } from "react";

import Cards from "../Cards/Cards";
import './Grid.css';

const Grid = () => {

    const [kittys, setKittys] = useState([])
    
    useEffect(() => 
        fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(resp =>  set_API(resp)) ,[]
    );

    const set_API = (re) => {
        setKittys(re); 
    };

        return (
            <div className='grid-flex bg-color' style={{grid:''}}>
                {kittys.map((kitty) => { 
                    return (
                        <Cards 
                            key={kitty.id}
                            breedName={kitty.name}
                            petImage={kitty.image?.url}
                            origin={kitty.origin}
                        />
                    )
                })}
            </div>
        )     

    
}

export default Grid;