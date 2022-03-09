import { useState, useEffect } from "react";



const Passarinhos = ( ) => {

  var myHeaders = new Headers();
    myHeaders.append("x-eBirdApiToken", "x-d25dv8tp3cr5");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors',
        redirect: 'follow'
    };


    const [birds, setBirds] = useState([]);

    useEffect(()=> {
        fetch("https://api.ebird.org/v2/data/obs/KZ/recent?key=d25dv8tp3cr5", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        // .then(result => setBirds(result))
        .catch(error => console.log('error', error));
    })


    return(
        <div>
    {/* {birds.map((b)=> <h1>{b?.howMany}</h1> )} */}
    <h1>asdijs</h1>
    </div>
    )
};

export default Passarinhos;