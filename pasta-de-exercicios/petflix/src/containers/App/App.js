// import de libs
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"; 

// // import de componentes
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Grid from '../../components/Grid/Grid';
import Footer from '../../components/Footer/Footer';





function App() {


        return (
            <div>
                <NavBar />
                <Banner />
                <Grid/>
                <Footer/> 
            </div>
        );

}

export default App;