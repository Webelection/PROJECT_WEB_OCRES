import React from 'react';
import './index.css';
import Home from './Home';
import Error from './Error';
import Parametre from './Parametre'; 
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/parametre" element={<Parametre />} />
                <Route path="/*" element={<Error />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;