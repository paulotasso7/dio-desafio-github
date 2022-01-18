// import de libs
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

// // import de componentes
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import CatList from '../../components/CatList/CatList';
import Footer from '../../components/Footer/Footer';

// import de pages
import Caezinhos from '../Caezinhos/Caezinhos.js';
import Gatinhos from '../Gatinhos/Gatinhos';
import Inicio from '../Inicio/Inicio';
import Passarinhos from "../Passarinhos/Passarinhos";


function App() {

        return (
            <div> 
                <Router>
                    <NavBar />
                    <Banner />
                        <Routes>
                            <Route path='/' element={<CatList/>}/>
                            <Route path='/caezinhos' element={<Caezinhos/>} />
                            <Route path='/inicio' element={<Inicio/>} />
                            <Route path='/gatinhos' element={<Gatinhos/>} />
                            <Route path='/passarinhos' element={<Passarinhos/>} />
                        </Routes>
                    <Footer/> 
                </Router>
            </div>
        );
}

export default App;
