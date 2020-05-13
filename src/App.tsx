import React from 'react';
import RoutePart from './route';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/NavBar';
export default function App() {
    
    return (
        <div className="blog">
            <Router>
                <Navbar />
                <RoutePart />
            </Router>
        </div>
    );
}
