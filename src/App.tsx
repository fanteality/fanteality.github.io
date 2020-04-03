import React from 'react';
import RoutePart from './route';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';
function App() {
    return (
        <div className="blog">
            <Router>
                <RoutePart />
                <Navbar title="测试页"/>
            </Router>
        </div>
    );
}

export default App;
