import React from 'react';
import Layout from '../layouts/Layout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Users from '../pages/Users.jsx';
import NotFound from "../pages/NotFound.jsx";

const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: Register
    },
    {
        path: '/users',
        element: Users
    },
    {
        path: '*',
        element: NotFound
    }
];

export default routes;
