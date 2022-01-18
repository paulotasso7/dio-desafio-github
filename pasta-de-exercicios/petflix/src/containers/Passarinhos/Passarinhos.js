import { useState, useEffect } from "react";






const Passarinhos = ( ) => {

    var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "{{d25dv8tp3cr5}}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


    const [birds, setBirds] = useState([]);

    useEffect(()=> {
        fetch("https://api.ebird.org/v2/ref/region/info/CA", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));;
    })


    return(
    <h1>Passaroooos</h1>
    )
};

export default Passarinhos;