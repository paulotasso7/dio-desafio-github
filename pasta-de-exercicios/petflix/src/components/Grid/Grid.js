import { useEffect, useState } from "react";

import Cards from "../Cards/Cards";
import './Grid.css';

const Grid = () => {

    const [kittys, setKitty] = useState([])
    
    useEffect(() => 
        fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(resp =>  set_API(resp)) ,[]
    );

    const set_API = (re) => {
        setKitty(re); 
    };

        return (
            <div className='grid-flex bg-color'>
                {kittys.map((r) => { 
                    return (
                            <Cards 
                                key={r.id}
                                breedName={r.name}
                                petImage={r.image?.url}
                                origin={r.origin}
                            />
                    )
                })}
            </div>
        )     

    
}

export default Grid;