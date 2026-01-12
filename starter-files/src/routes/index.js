import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import NavBar from './../components/NavBar';
import Home from './../pages/Home';
import PastLaunches from './../pages/PastLaunches';
import Rocket from './../pages/Rocket';

const Routing = () => (
    <Router>
        <div className="general">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/launches" element={<PastLaunches />} />
                <Route exact path="/rocket/:id" element={<Rocket />} />
            </Routes>
        </div>
    </Router>
);

export default Routing;
