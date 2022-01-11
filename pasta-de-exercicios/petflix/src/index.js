import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router , Route, Switch, Routes } from "react-router-dom"; 


// import de pages
import Caezinhos from './containers/Caezinhos/Caezinhos.js';
import Gatinhos from './containers/Gatinhos/Gatinhos';
import Inicio from './containers/Inicio/Inicio';


ReactDOM.render(
    
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path='/' element={<App/>} />
                    <Route path='/caezinhos' element={<Caezinhos/>} />
                    <Route path='/inicio' element={<Inicio/>} />
                    <Route path='/gatinhos' element={<Gatinhos/>} />
                </Routes>
            </Router>
        </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();
