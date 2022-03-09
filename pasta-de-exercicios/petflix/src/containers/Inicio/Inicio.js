import { useEffect } from "react";
import Content from "../../components/GridSlider/Content";
import ShowDetailsButton from "../../components/GridSlider/ShowDetailsButton";

const Inicio = () => {

//   const [animals, setAnimals] = useState([]);

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://ghibliapi.herokuapp.com/species", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

})
    
  

    return (
        <div>
            <Content/>
            <ShowDetailsButton/>
        </div>
        
    )
};

export default Inicio;