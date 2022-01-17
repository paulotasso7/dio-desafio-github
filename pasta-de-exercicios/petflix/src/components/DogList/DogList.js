import { useEffect, useState } from "react";
import DogCard from "../DogCard/DogCard";

const DogList = () => {

    const [dogs, setDogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
       
            setIsLoading(true)
            fetch('https://api.thedogapi.com/v1/breeds', {
                method:'GET' ,
                headers: {
                'x-api-key': 'c6621078-67a0-4dd5-9acf-875e5a2e2fd1'
                } 
            })
            .then(res => res.json())
            .then(data => {
                setDogs(data)
                console.log(data)
                setIsLoading(false)
            })

    },[]);

  
    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className='grid-flex bg-color' style={{grid:''}}>
            {
            dogs.map((dog, i) => { 
                return (
                    <DogCard 
                        key={dog?.id}
                        breedName={dog?.name}
                        dogImage={dog?.image?.url}
                        origin={dog?.origin}
                    />
                )
            })
            }
        </div>
    )     
 
}

export default DogList;