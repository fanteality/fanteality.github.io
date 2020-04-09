import React from 'react';
import RoutePart from './route';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';
import './app.scss'
function App() {
    return (
        <div className="blog">
            <Router>
                <Navbar />
                <RoutePart />
            </Router>
        </div>
    );
}

export default App;
