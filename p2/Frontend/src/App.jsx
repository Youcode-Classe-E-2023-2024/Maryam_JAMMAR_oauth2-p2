import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import Users from './page/Users.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    );
}

export default App;
