import { useEffect, useState } from "react";

import CatCard from "../CatCard/CatCard";
import './CatList.css';

const CatList = () => {

    const [kittys, setKittys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true)
        fetch('https://api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(resp => { 
            setKittys(resp)
            setIsLoading(false)  
        });
    },[])

    if(isLoading){ return(<h1>Loading...</h1>)}


    return (
        <div className='grid-flex bg-color' style={{grid:''}}>
            {
            kittys.map((kitty) => { 
                return (
                    <CatCard 
                        key={kitty.id}
                        breedName={kitty.name}
                        catImage={kitty.image?.url}
                        origin={kitty.origin}
                    />
                )
            })
            }
        </div>
    )     

    
}

export default CatList;