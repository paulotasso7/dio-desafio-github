// import de libs
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"; 

// // import de componentes
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Grid from '../../components/Grid/Grid';
import Footer from '../../components/Footer/Footer';

// import de pages
import Caezinhos from '../Caezinhos/Caezinhos.js';
import Gatinhos from '../Gatinhos/Gatinhos';
import Inicio from '../Inicio/Inicio';




function App() {


        return (
            <div>
                
                <Router>
                     <NavBar />
                     <Banner />
                    <Routes>
                        {/* <Route element={<NavBar/>} /> */}
                        {/* <Route element={<Banner/>} /> */}
                        <Route path='/' element={<Grid/>}/>
                        <Route path='/caezinhos' element={<Caezinhos/>} />
                        <Route path='/inicio' element={<Inicio/>} />
                        <Route path='/gatinhos' element={<Gatinhos/>} />
                    </Routes>
                    <Footer/> 
                </Router>
            </div>
        );

}

export default App;
